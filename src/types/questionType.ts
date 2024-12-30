import * as z from "zod";
export const QuestionFormSchema = z.object({
	name: z.string(),
	question: z.string(),
	phone: z.string(),
	email: z.string().email(),
});
