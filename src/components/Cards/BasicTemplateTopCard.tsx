"use client";
import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";
import Wrapper from "../mainComponents/Wrapper";

export type BasicTemplateTopCardProps = {
	title: string;
	description: string;
	button1?: {
		title: string;
		action: () => void;
	};
	button2?: {
		title: string;
		action: () => void;
	};
	className?: string;
	textLeft?: boolean;
	image: {
		width: number;
		height: number;
		src: string;
	};
};

const BasicTemplateTopCard = ({
	title,
	description,
	button1,
	button2,
	className,
	textLeft,
	image,
}: BasicTemplateTopCardProps) => {
	return (
		<div className={`w-full flex flex-col ${className} z-20 lg:px-10 md:px-5 `}>
			<div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:gap-10 md:gap-5 w-full  text-primary-content  ">
				<div className="flex flex-col gap-3 md:gap-5 lg:gap-7 text-center md:text-left ">
					<h1 className="lg:text-7xl text-4xl font-bold tracking-tight">
						{title}
					</h1>
					<p className="text text-wrap md:font-light font-extralight lg:text-xl">
						{description}
					</p>

					{/* button section  */}
					<div className="flex flex-row justify-between md:justify-start md:px-0 md:gap-5 my-2 px-10 items-center">
						{button1 && (
							<button
								className="w-fit du-btn du-btn-primary rounded-full du-btn-sm md:du-btn-md"
								onClick={button1.action}
							>
								{button1.title}
							</button>
						)}
						{button2 && (
							<button
								className="w-fit du-btn du-btn-outline rounded-full text-primary-content du-btn-sm md:du-btn-md"
								onClick={button2.action}
							>
								{button2.title}
							</button>
						)}
					</div>
					{/* button seciton end  */}
				</div>
				<div className="relative  md:max-h-96   w-full mx-auto  min-h-80">
					<Image
						src={image.src}
						fill
						alt=""
						className=" lg:max-w-[600px] mx-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default BasicTemplateTopCard;
