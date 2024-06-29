"use server";
import { NextRequest, NextResponse } from "next/server";
import { createUserAssesment } from "@/lib/api/user";

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { email, ...assessment } = body;

	try {
		const newUser = await createUserAssesment({ email, ...assessment });
		return NextResponse.json(newUser, { status: 200 });
	} catch (error) {
		console.error("Error creating user:", error);
		return NextResponse.json({ error: "Error creating user" }, { status: 500 });
	}
}
