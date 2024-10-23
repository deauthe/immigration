import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import React from "react";

type Props = {};

const statics = {
	title: "Why Us?",
	description: `What sets BMOR apart?
We, at Ask BMOR Immigration Inc., are fully committed towards providing immense value while assisting you in your journey towards making your Canadian Immigration dream a reality.
Ask BMOR Immigration Inc., with a focus on communication and clarity, stands tall and proud on the pillars of:`,
	image: "/whyUs.png",
};

export default function AboutUsCard(props: Props) {
	return (
		<div className=" w-full md:grid grid-cols-4 lg:gap-10 justify-center">
			<div className="col-span-3 du-card w-auto bg-base-100 shadow-xl rounded-none  max-h-72 text-black md:w-full mx-4 items-center md:mx-0 relative">
				<div className="absolute right-0 top-0 h-full w-2 bg-primary hidden md:block"></div>
				<div className="du-card-body md:text-left text-center flex flex-col justify-between">
					<h2 className="du-card-title md:text-left text-center items-center mx-auto bg-black">
						{statics.title}
					</h2>
					<p className="lg:w-1/2 text-center mx-auto bg-primary">
						{statics.description}
					</p>
				</div>
			</div>

			{/* image  */}
			<div className="col-span-1 lg:mr-10  hidden md:block ">
				<Image
					src={statics.image}
					alt="about us"
					width={500}
					height={500}
					className="mx-auto md:rounded-none lg:rounded-3xl"
				/>
			</div>
		</div>
	);
}

export const AboutUsCard2 = () => {
	return (
		<WobbleCard
			containerClassName="lg:max-w-6xl max-w-4xl bg-transparent bg-primary w-full rounded-none md:rounded-full shadow-none "
			className="max-w-6xl md:bg-dot-primary rounded-none"
		>
			<div className="max-w-2xl text-center mx-auto ">
				<h2 className=" text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black  ">
					Why us?
				</h2>
				<p className="mt-4 text-base/6 text-neutral w-3/4 font-sentient">
					Here at BMOR immigration, we understand what a big decision coming to
					Canada is. That’s why we will be there to support you every step of
					the way. Our consultants give personalized advice to each customer,
					creating a bond that goes beyond one of a client. We are devoted to
					our company, and operate on the following values: Reliability,
					Humanism, Ethics and Responsibility.
				</p>
			</div>
			<Image
				src="/ceo.webp"
				width={500}
				height={500}
				alt="linear demo image"
				className="hidden md:absolute md:top-0  md:-right-[20%] lg:right-0"
			/>
		</WobbleCard>
	);
};
