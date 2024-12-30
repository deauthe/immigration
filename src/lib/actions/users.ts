"use server";

import { User } from "@prisma/client";
import prisma from "../prisma";

export const getAllUsers = async () => {
	try {
		const users = await prisma.user.findMany({
			include: {
				questions: true,
				userAssesment: true,
			},
		});
		return users;
	} catch (error) {
		throw new Error("Failed to fetch users");
	}
};

export const getAssesment = async ({ id }: { id: string }) => {
	try {
		const assesment = await prisma.userAssesment.findUnique({
			where: {
				id,
			},
		});
		return assesment;
	} catch (error) {
		throw new Error("Failed to get user assesment");
	}
};

export const getUserQuestions = async ({ userId }: { userId: string }) => {
	try {
		const questions = await prisma.question.findMany({
			where: {
				userId,
			},
		});
		return questions;
	} catch (error) {
		throw new Error("Failed to get user questions");
	}
};

interface UserCount {
	[key: string]: number;
}

interface UserGrowth {
	[key: string]: string;
}

interface MonthUserCount {
	month: string;
	year: number;
	count: number;
}

export async function getMonthlyUserAnalytics() {
	const now = new Date();
	const lastYear = new Date(
		now.getFullYear() - 1,
		now.getMonth(),
		now.getDate()
	);

	const usersLastYear = await prisma.user.findMany({
		where: {
			createdAt: {
				gte: lastYear,
			},
		},
	});

	const countUsersPerMonth = (users: User[]): MonthUserCount[] => {
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const userCountPerMonth = users.reduce((acc: UserCount, user: User) => {
			const month = user.createdAt.getMonth(); // Get month (0-based index)
			const year = user.createdAt.getFullYear();
			const key = `${year}-${month}`; // Format as YYYY-MM
			acc[key] = (acc[key] || 0) + 1;
			return acc;
		}, {});

		const formattedUserCount: MonthUserCount[] = Object.keys(userCountPerMonth)
			.map((key) => {
				const [year, month] = key.split("-").map(Number);
				return {
					month: monthNames[month],
					year,
					count: userCountPerMonth[key],
				};
			})
			.sort(
				(a, b) =>
					a.year - b.year ||
					monthNames.indexOf(a.month) - monthNames.indexOf(b.month)
			); // Sort by year and month

		return formattedUserCount;
	};

	const usersLastYearCount: MonthUserCount[] =
		countUsersPerMonth(usersLastYear);

	const calculateGrowth = (
		counts: MonthUserCount[]
	): Record<string, string> => {
		const months = counts.map((count) => `${count.year}-${count.month}`);
		const growth: Record<string, string> = {};

		for (let i = 1; i < counts.length; i++) {
			const currentCount = counts[i].count;
			const previousCount = counts[i - 1].count;

			if (previousCount === 0) {
				growth[months[i]] = "N/A"; // No growth calculation if the previous month's count is zero
			} else {
				const growthPercentage =
					((currentCount - previousCount) / previousCount) * 100;
				growth[months[i]] = growthPercentage.toFixed(2) + "%";
			}
		}

		return growth;
	};

	const usersGrowth: Record<string, string> =
		calculateGrowth(usersLastYearCount);
	const currentMonth = getCurrentMonthFormatted();
	const growthThisMonth = usersGrowth[currentMonth] || "N/A";
	console.log("Users created in the last year (counts):", usersLastYearCount);
	console.log("Month-on-month user growth:", usersGrowth);
	return {
		usersLastYear,
		usersLastYearCount,
		usersGrowth,
		growthThisMonth,
	};
}

const getCurrentMonthFormatted = (): string => {
	const now = new Date();
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const year = now.getFullYear();
	const month = monthNames[now.getMonth()];

	return `${year}-${month}`;
};
