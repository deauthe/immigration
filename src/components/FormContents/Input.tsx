"use client";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	register: UseFormRegister<any>;
	errors: any;
}

function Input({
	id,
	label,
	type,
	disabled,
	formatPrice,
	required,
	register,
	errors,
}: InputProps) {
	return (
		<div className="w-full relative">
			{formatPrice && (
				<BiDollar
					size={24}
					className="text-neutral-700 absolute top-5 left-2"
				/>
			)}
			<input
				id={id}
				type={type}
				disabled={disabled}
				placeholder=""
				{...register(id, { required })}
				className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
					formatPrice ? "pl-9" : "pl-4"
				} ${
					errors[id]
						? "border-warning focus:border-warning"
						: "border-primary focus:bg-primary-content"
				}
                 `}
			/>
			<label
				className={`
				absolute
                text-md
                duration-150
                transform 
                -translate-y-3
                top-5 
                z-10 
				origin-[0] 
				${formatPrice ? "left-9" : "left-4"}
				 peer-placeholder-shown:scale-100 
				 peer-placeholder-shown:translate-y-0 
				 peer-focus:scale-75 
				 peer-focus:-translate-y-4 
                ${errors[id] ? "text-warning/30" : "text-neutral/30"}
                `}
			>
				{label}
			</label>
			{errors[id] && (
				<span className="text-warning text-sm absolute top-5 left-2">
					{errors[id].message}
				</span>
			)}
		</div>
	);
}

export default Input;
