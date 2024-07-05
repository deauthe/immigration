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
import { IconError404 } from "@tabler/icons-react";
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

	useEffect(() => {
		const email = session.data?.user?.email;
		if (email) {
			setEmail(email);
			setValue("email", email);
		}
	}, [session, setValue]);

	useEffect(() => {
		console.log("errors hai:", errors);
	}, [errors]);

	const onSubmit: SubmitHandler<Question> = (data: Question) => {
		setIsloading(true);
		const parseSuccess = QuestionFormSchema.safeParse(data);
		console.log("user data:", data, "parseSuccess:", parseSuccess);
		if (parseSuccess.success) {
			try {
				axios
					.post("/api/user-assessment", data)
					.then((res) => {
						console.log("response", res.data);
						toast({
							title: "Success",
							description: `your response has been submitted ${res.data?.firstName}`,

							duration: 5000,
						});
						router.push("/");
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
					})
					.finally(() => {
						setIsloading(false);
						console.log("done hai");
					});
			} catch (err) {
				console.log("error in submitting question", err);
			}
		} else {
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
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
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
				<input
					className="du-textarea-lg du-textarea shrink-0 text-wrap du-textarea-primary bg-transparent h-36 w-full justify-start p-0"
					id="comment"
					type="text"
					{...register("question")}
				/>
				{errors.question && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.question.message)}
					</p>
				)}
			</div>

			<button className="du-btn du-btn-primary my-2 " type="submit">
				Submit
			</button>
		</form>
	);
};

export default QuestionFormContent;
