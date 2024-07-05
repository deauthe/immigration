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
				<div className="du-card-body md:text-left text-center">
					<h2 className="du-card-title md:text-left text-center items-center mx-auto">
						{statics.title}
					</h2>
					<p>{statics.description}</p>
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
