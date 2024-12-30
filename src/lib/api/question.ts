import { QuestionFormSchema } from "@/types/questionType";
import * as z from "zod";
import prisma from "@/lib/prisma";

export async function askQuestion(input: z.infer<typeof QuestionFormSchema>) {
	if (!QuestionFormSchema.safeParse(input).success)
		throw new Error("Invalid input");

	console.log("I got called");
	const { email, name, phone, question } = input;
	//finding userId associated with email
	const user = await getUser({ email });
	if (!user) {
		throw new Error("User not found");
	} else {
		const userId = user.id;

		//updating existing assesment
		try {
			const newAssesment = await prisma.question.create({
				data: {
					email,
					name,
					question,
					phone,
					userId,
					isOpen: true,
				},
			});
			return newAssesment;
		} catch (error) {
			console.log(error);

			throw new Error("Error creating question");
		}
	}
}

export async function getUser({ email }: { email: string }) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching user");
	}
}
