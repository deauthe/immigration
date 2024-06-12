import {
	CreateUserAssesmentInput,
	CreateUserWithAssessmentInput,
} from "@/types/user";
import prisma from "@/lib/prisma";

export async function createUser(input: CreateUserWithAssessmentInput) {
	let newUser;
	if (input.assessment) {
		newUser = await prisma.user.create({
			data: {
				username: input.username,
				userAssesment: {
					create: {
						...input.assessment,
					},
				},
			},
		});
	} else {
		newUser = await prisma.user.create({
			data: {
				username: input.username,
			},
		});
	}

	return newUser;
}

export async function createUserWithAssessment(
	input: CreateUserWithAssessmentInput
) {
	let newUser;
	if (input.assessment) {
		newUser = await prisma.user.create({
			data: {
				username: input.username,
				userAssesment: {
					create: {
						...input.assessment,
					},
				},
			},
		});
	} else {
		newUser = await prisma.user.create({
			data: {
				username: input.username,
			},
		});
	}

	return newUser;
}

export async function createUserAssesment(input: CreateUserAssesmentInput) {
	const { userId, ...assessmentData } = input;

	const newAssesment = await prisma.userAssesment.create({
		data: {
			...assessmentData,
			user: {
				connect: { id: userId },
			},
		},
	});

	return newAssesment;
}

export async function getUserAssesment(userId: string) {
	const result = await prisma.userAssesment.delete({
		where: {
			userId: userId,
		},
	});
	console.log(result);
}

export async function deleteUserAssesment(userId: string) {
	const result = await prisma.userAssesment.delete({
		where: {
			userId,
		},
	});
	console.log(result);
}
