"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "@/components/ui/label";

import { CreateUserAssesmentInput } from "@/types/user";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { title } from "process";
import { useSession } from "next-auth/react";

const AssesmentFormContent = () => {
	const {
		register,
		formState: { errors, touchedFields },
		handleSubmit,
	} = useForm<CreateUserAssesmentInput>();
	const [email, setEmail] = useState<string>();

	const router = useRouter();
	const { toast } = useToast();
	const session = useSession();

	useEffect(() => {
		setEmail(session.data?.user?.email || undefined);
	}, [session]);

	const onSubmit: SubmitHandler<CreateUserAssesmentInput> = (
		data: CreateUserAssesmentInput
	) => {
		console.log(data);
		if (!email) {
			toast({
				title: "Please login First",
				action: (
					<div className="mx-auto text-right  font-semibold tracking-tight ">
						{"Couldn't Submit Form"}
					</div>
				),
			});
			return;
		}

		try {
			toast({
				title: "we will contact you shortly",
				action: (
					<div className="mx-auto text-right  font-semibold tracking-tight ">
						form submitted successfully
					</div>
				),
			});
		} catch (error) {
			toast({
				title: "An Error Occured",
				action: (
					<div className="mx-auto text-right  font-semibold tracking-tight ">
						{"Couldn't Submit Form"}
					</div>
				),
			});
		}

		router.push("/");
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="du-form-control bg-transparent text-primary-content p-4 rounded-3xl"
		>
			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="email"
				>
					Email
				</Label>
				<input
					id="email"
					type="email"
					disabled
					value={email || ("login first" as string)}
					{...register("email")}
					className="du-input-disabled du-input w-full max-w-md px-2 bg-transparent"
				/>
				{errors.email && (
					<p className="text-xs text-primary">{"please sign In first"}</p>
				)}
			</div>
			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="mobileNo"
				>
					First Name
				</Label>
				<input
					id="firstName"
					className="du-input du-input-bordered du-input-primary w-full max-w-xs px-2 bg-transparent"
					type="text"
					{...register("firstName", { required: "First name is required" })}
				/>
				{errors.firstName && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.firstName.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="mobileNo"
				>
					Last Name
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full max-w-xs px-2 bg-transparent"
					id="lastName"
					type="text"
					{...register("lastName", { required: "Last name is required" })}
				/>
				{errors.lastName && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.lastName.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="mobileNo"
				>
					Mobile No
				</Label>
				<input
					id="mobileNo"
					type="text"
					{...register("mobileNo")}
					className="du-input du-input-bordered du-input-primary w-full max-w-md px-2 bg-transparent"
				/>
				{errors.mobileNo && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.mobileNo.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="country"
				>
					Country
				</Label>
				<input
					id="country"
					type="text"
					{...register("country")}
					className="du-input du-input-bordered du-input-primary w-full max-w-xs px-2 bg-transparent"
				/>
				{errors.country && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.country.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="childrenNo"
				>
					Number of Children
				</Label>
				<input
					id="childrenNo"
					type="number"
					{...register("childrenNo")}
					className="du-input du-input-bordered du-input-primary w-full max-w-xs px-2 bg-transparent"
				/>
				{errors.childrenNo && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.childrenNo.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="age"
				>
					Age
				</Label>
				<input
					id="age"
					type="number"
					{...register("age")}
					className="du-input du-input-bordered du-input-primary w-full max-w-xs px-2 bg-transparent"
				/>
				{errors.age && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.age.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="educationLevel"
				>
					Education Level
				</Label>
				<select
					defaultValue={"short"}
					id="educationLevel"
					{...register("educationLevel")}
					className="du-select du-select-primary w-full max-w-lg bg-transparent"
				>
					<option disabled>Pick one</option>
					<option value="short">Short</option>
					<option value="medium">Medium</option>
					<option value="long">Long</option>
				</select>
				{errors.educationLevel && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.educationLevel.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="educationField"
				>
					Education Field
				</Label>
				<select
					id="educationField"
					defaultValue={"short"}
					{...register("educationField")}
					className="du-select du-select-primary w-full max-w-md bg-transparent"
				>
					<option disabled>Pick one</option>
					<option value="short">Short</option>
					<option value="medium">Medium</option>
					<option value="long">Long</option>
				</select>
				{errors.educationField && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.educationField.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="englishLevel"
				>
					English Level
				</Label>
				<select
					id="englishLevel"
					defaultValue={"short"}
					{...register("englishLevel")}
					className="du-select du-select-primary w-full max-w-md bg-transparent"
				>
					<option disabled>Pick one</option>
					<option value="short">Short</option>
					<option value="medium">Medium</option>
					<option value="long">Long</option>
				</select>
				{errors.englishLevel && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.englishLevel.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="frenchLevel"
				>
					French Level
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full max-w-xs px-2 bg-transparent"
					id="frenchLevel"
					type="text"
					{...register("frenchLevel")}
				/>
				{errors.frenchLevel && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.frenchLevel.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="ieltsScorce"
				>
					IELTS Score
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full max-w-xs px-2 bg-transparent"
					id="ieltsScorce"
					type="text"
					{...register("ieltsScorce")}
				/>
				{errors.ieltsScorce && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.ieltsScorce.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full flex gap-5 my-2">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="familyInCanada"
				>
					Family in Canada
				</Label>
				<input
					id="familyInCanada"
					type="checkbox"
					className="du-checkbox du-checkbox-primary my-auto"
					defaultChecked={false}
					{...register("familyInCanada")}
				/>
				{errors.familyInCanada && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.familyInCanada.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="travelHistory"
				>
					Travel History
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full max-w-xs px-2 bg-transparent"
					id="travelHistory"
					type="text"
					{...register("travelHistory")}
				/>
				{errors.travelHistory && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.travelHistory.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="netWorth"
				>
					Net Worth(approximated in Canadian Dollars)
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full max-w-xs px-2 bg-transparent"
					id="netWorth"
					type="text"
					{...register("netWorth")}
				/>
				{errors.netWorth && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.netWorth.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit text-primary-content uppercase font-extralight"
					htmlFor="comment"
				>
					Comment
				</Label>
				<input
					className="du-textarea-lg du-textarea text-xs du-textarea-primary bg-transparent"
					id="comment"
					type="text"
					{...register("comment")}
				/>
				{errors.comment && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.comment.message)}
					</p>
				)}
			</div>

			<button className="du-btn du-btn-primary my-2 max-w-xs" type="submit">
				Submit
			</button>
		</form>
	);
};

export default AssesmentFormContent;
