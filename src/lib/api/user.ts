import { UserAssessmentInputSchema } from "@/types/user";
import prisma from "@/lib/prisma";
import { z } from "zod";

export async function createUserAssesment(
	input: z.infer<typeof UserAssessmentInputSchema>
) {
	if (!UserAssessmentInputSchema.safeParse(input).success)
		throw new Error("Invalid input");

	const { email, ...assessmentData } = input;
	console.log("I got called");

	//finding userId associated with email
	const user = await getUser({ email });
	if (!user) {
		throw new Error("User not found");
	} else {
		const userId = user.id;
		if (user.userAssesment?.id) {
			//updating existing assesment
			try {
				const newAssesment = await prisma.userAssesment.update({
					where: {
						id: user.userAssesment.id,
					},
					data: {
						...assessmentData,
					},
				});
				return newAssesment;
			} catch (error) {
				throw new Error("Error updating assesment");
			}
		} else {
			//creating new assesment
			try {
				const newAssesment = await prisma.userAssesment.create({
					data: {
						...assessmentData,
						user: {
							connect: { id: userId },
						},
					},
				});
				return newAssesment;
			} catch (error) {
				throw new Error("Error creating assesment");
			}
		}
	}
}

export async function getUser({ email }: { email: string }) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
			include: {
				userAssesment: true,
			},
		});
		return user;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching user");
	}
}
