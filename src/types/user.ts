import * as z from "zod";

export interface CreateUserInput {
	username: string;
	email: string;
}

export const UserAssessmentInputSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	mobileNo: z.string().optional(),
	email: z.string().email(),
	country: z.string().optional(),
	childrenNo: z.number().int().optional(),
	age: z.number().int().optional(),
	educationLevel: z.enum(["Primary", "Secondary", "Tertiary"]).optional(), // Adjust based on your enum values
	educationField: z.string().optional(), // Adjust based on your enum values
	englishLevel: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(), // Adjust based on your enum values
	frenchLevel: z.string().optional(),
	ieltsScore: z.string().optional(),
	familyInCanada: z.boolean(),
	travelHistory: z.string().optional(),
	netWorth: z.string().optional(),
	comment: z.string().optional(),
});
