import { getAssesment, getUserQuestions } from "@/lib/actions/users";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

async function UserQuestions({ params }: { params: { userId: string } }) {
	const userId = params.userId;
	const questions = await getUserQuestions({ userId });

	return (
		<Card className="max-w-5xl w-full bg-black mx-auto mt-20">
			<CardHeader className="text-white">
				<CardTitle>Questions from userId: {userId}</CardTitle>
				<CardDescription>
					Showing total new users for the last 2 years
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex gap-4 text-sm flex-col">
					{questions.map((question, idx) => {
						return (
							<div
								key={idx}
								className="flex flex-col text-left text-white justify-start "
							>
								<h1 className="text-lg text-primary">
									{"question from " + question.name}
								</h1>
								<p className="text-sm">{question.phone}</p>
								<p className="text-sm">{question.question}</p>
								<p className="text-sm">{question.id}</p>
							</div>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
}

export default UserQuestions;
