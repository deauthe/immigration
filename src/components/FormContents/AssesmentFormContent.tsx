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
			className="du-form-control   p-4 rounded-3xl bg-transparent mx-auto w-full items-center flex flex-col gap-3 text-black"
		>
			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
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
					className="du-input-disabled du-input  w-full  px-2 bg-transparent"
				/>
				{errors.email && (
					<p className="text-xs text-primary">{"please sign In first"}</p>
				)}
			</div>
			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="mobileNo"
				>
					First Name
				</Label>
				<input
					id="firstName"
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
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
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="mobileNo"
				>
					Last Name
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
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
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="mobileNo"
				>
					Mobile No
				</Label>
				<input
					id="mobileNo"
					type="text"
					{...register("mobileNo")}
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
				/>
				{errors.mobileNo && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.mobileNo.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="country"
				>
					Country
				</Label>
				<input
					id="country"
					type="text"
					{...register("country")}
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
				/>
				{errors.country && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.country.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="childrenNo"
				>
					Number of Children
				</Label>
				<input
					id="childrenNo"
					type="number"
					{...register("childrenNo")}
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
				/>
				{errors.childrenNo && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.childrenNo.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full ">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="age"
				>
					Age
				</Label>
				<input
					id="age"
					type="number"
					{...register("age")}
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
				/>
				{errors.age && (
					<p className="text-xs text-primary">
						{JSON.stringify(errors.age.message)}
					</p>
				)}
			</div>

			<div className="mx-auto w-full">
				<Label
					className="du-label-text du-label w-fit 
					
					
					
					
					uppercase font-light"
					htmlFor="educationLevel"
				>
					Education Level
				</Label>
				<select
					defaultValue={"short"}
					id="educationLevel"
					{...register("educationLevel")}
					className="du-select du-select-primary w-full  bg-transparent"
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
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="educationField"
				>
					Education Field
				</Label>
				<select
					id="educationField"
					defaultValue={"short"}
					{...register("educationField")}
					className="du-select du-select-primary w-full  bg-transparent"
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
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="englishLevel"
				>
					English Level
				</Label>
				<select
					id="englishLevel"
					defaultValue={"short"}
					{...register("englishLevel")}
					className="du-select du-select-primary w-full  bg-transparent"
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
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="frenchLevel"
				>
					French Level
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
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
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="ieltsScorce"
				>
					IELTS Score
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
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

			<div className="mx-auto w-full flex justify-between items-center my-2">
				<Label
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="familyInCanada"
				>
					Family in Canada
				</Label>
				<input
					id="familyInCanada"
					type="checkbox"
					className="du-checkbox du-checkbox-primary my-auto size-8"
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
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="travelHistory"
				>
					Travel History
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
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
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="netWorth"
				>
					Net Worth(approximated in Canadian Dollars)
				</Label>
				<input
					className="du-input du-input-bordered du-input-primary w-full  px-2 bg-transparent"
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
					className="du-label-text du-label w-fit  uppercase font-light"
					htmlFor="comment"
				>
					Comment
				</Label>
				<input
					className="du-textarea-lg du-textarea shrink-0 text-wrap du-textarea-primary bg-transparent h-36 w-full justify-start p-0"
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

			<button className="du-btn du-btn-primary my-2 " type="submit">
				Submit
			</button>
		</form>
	);
};

export default AssesmentFormContent;
