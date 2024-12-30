"use server";
import { NextRequest, NextResponse } from "next/server";
import { askQuestion } from "@/lib/api/question";

export async function POST(req: NextRequest) {
	console.log("reaching here");
	const body = await req.json();
	const { email, phone, question, name } = body;

	try {
		const newQuestion = await askQuestion({ email, phone, question, name });
		return NextResponse.json(newQuestion, { status: 200 });
	} catch (error) {
		console.error("Error creating question:", error);
		return NextResponse.json(
			{ error: "Error creating question" },
			{ status: 500 }
		);
	}
}
