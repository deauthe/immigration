import Image from "next/image";
import React from "react";

type Props = {};

export default function AboutUsCard(props: Props) {
	return (
		<div className=" w-full left-0 right-0 md:grid grid-cols-4 gap-10 ">
			<div className="col-span-3 du-card w-full bg-base-100 shadow-xl rounded-none  max-h-96 text-black md:w-full mx-3 items-center md:mx-0 relative">
				<div className="absolute right-0 top-0 h-full w-2 bg-primary"></div>
				<div className="du-card-body md:text-left text-center">
					<h2 className="du-card-title md:text-left text-center">Why Us?</h2>
					<p>{`What sets BMOR apart?
We, at Ask BMOR Immigration Inc., are fully committed towards providing immense value while assisting you in your journey towards making your Canadian Immigration dream a reality.
Ask BMOR Immigration Inc., with a focus on communication and clarity, stands tall and proud on the pillars of:`}</p>
				</div>
			</div>

			{/* image  */}
			<div className="col-span-1 mr-10 ">
				<Image
					src="/whyUs.png"
					alt="about us"
					width={500}
					height={500}
					className="mx-auto"
				/>
			</div>
		</div>
	);
}
