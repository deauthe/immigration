"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import * as z from "zod";
import LoginButton from "@/components/LoginButton";
import { QuestionFormSchema } from "@/types/questionType";
import { IconError404, IconFaceIdError } from "@tabler/icons-react";
import { send } from "process";
type Question = z.infer<typeof QuestionFormSchema>;

const QuestionFormContent = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		clearErrors,
	} = useForm<Question>({
		resolver: zodResolver(QuestionFormSchema),
	});

	const [email, setEmail] = useState<string>();
	const [isLoading, setIsloading] = useState(false);

	const router = useRouter();
	const { toast } = useToast();
	const session = useSession();
	const [status, setStatus] = useState<string | null>(null);

	useEffect(() => {
		const email = session.data?.user?.email;
		if (email) {
			setEmail(email);
			setValue("email", email);
		}
	}, [session, setValue]);

	const onSubmit: SubmitHandler<Question> = (data: Question) => {
		setIsloading(true);
		const parseSuccess = QuestionFormSchema.safeParse(data);
		console.log("user data:", data, "parseSuccess:", parseSuccess);
		//parsing error handle
		if (!parseSuccess.success) {
			console.log("error in parsing data", parseSuccess.error);
			toast({
				title: "error",
				description: `your response submission failed`,
				action: (
					<div className="">
						<IconError404 />
					</div>
				),

				duration: 5000,
			});
		}

		let succesPost = false;
		let successMail = false;
		let name = data.name;

		//axios post request for database saving
		try {
			axios
				.post("/api/question", data)
				.then((res) => {
					console.log("response", res.data);
					succesPost = true;
				})
				.catch((err) => {
					toast({
						title: "error",
						description: `your response submission failed`,
						action: (
							<div className="">
								<IconError404 />
							</div>
						),

						duration: 5000,
					});
					console.error(err);
				});

			//axios post request for email
			axios
				.post("/api/question/email-question", data)
				.then((res) => {
					console.log("response", res.data);
					successMail = true;
				})
				.catch((err) => {
					toast({
						title: "error",
						description: `your response could not be mailed ${err}`,
						action: (
							<div className="">
								<IconFaceIdError />
							</div>
						),

						duration: 5000,
					});
				})
				.finally(() => {
					setIsloading(false);
				});

			if (succesPost && successMail) {
				toast({
					title: "Success",
					description: `your response has been submitted ${name}`,

					duration: 5000,
				});
			} else {
				throw new Error("posting in backend or mailing resulted in error");
			}
		} catch (err) {
			console.log("error in submitting question", err);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="du-form-control   p-4 rounded-3xl bg-transparent mx-auto w-full items-center flex flex-col gap-3 text-black"
		>
			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="mobileNo"
				>
					Email
				</Label>
				<input
					id="email"
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
					type="email"
					value={email || "please login first"}
					disabled
				/>
				{!email && (
					<div className="my-2">
						<LoginButton />
					</div>
				)}
				{errors.email && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.email.message)}
					</p>
				)}
			</div>
			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="mobileNo"
				>
					Phone
				</Label>
				<input
					disabled={isLoading}
					id="firstName"
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
					type="text"
					{...register("phone", {
						required: "phone number is required for whatsapp",
					})}
				/>
				{errors.phone && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.phone.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="name"
				>
					Name
				</Label>
				<input
					disabled={isLoading}
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent "
					id="lastName"
					type="text"
					{...register("name", { required: "Last name is required" })}
				/>
				{errors.name && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.name.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="question"
				>
					Question
				</Label>
				<textarea
					className="du-textarea-lg du-textarea shrink-0 text-wrap du-textarea-primary bg-transparent h-36 w-full justify-start p-0"
					id="comment"
					{...register("question")}
				/>
				{errors.question && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.question.message)}
					</p>
				)}
			</div>

			<button className="du-btn du-btn-primary my-2" type="submit">
				Submit
			</button>
		</form>
	);
};

export default QuestionFormContent;
