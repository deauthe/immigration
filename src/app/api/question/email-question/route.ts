// pages/api/send-question.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { question, email, phone, name } = body;

	if (!question || !email) {
		console.log("empty fields", body);

		return NextResponse.json({ error: `empty fields` }, { status: 505 });
	}

	try {
		// Configure your email transport
		const transporter = nodemailer.createTransport({
			service: "gmail", // e.g., "gmail"
			port: 465,
			secure: true,
			auth: {
				user: process.env.NEXT_PUBLIC_SENDER_EMAIL, // Your email address
				pass: process.env.SENDER_EMAIL_PASSWORD, // Your email password or app-specific password
			},
		});

		// Email content
		const mailOptions = {
			from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
			to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL, // The email where you want to receive questions
			subject: `New Question from : ${email}`,
			text: `You received a new question from ${name} - ${email}: \n\n${question} \n\n phone number : ${phone}`,
		};

		// Send the email
		transporter.sendMail(mailOptions, (err, response) => {
			console.log("err", err, "response", response);
		});

		return NextResponse.json(question, { status: 200 });
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: `Error emailing question : ${error}` },
			{ status: 500 }
		);
	}
}
