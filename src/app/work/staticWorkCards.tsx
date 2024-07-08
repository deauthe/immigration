import { CarouselCardProps } from "@/components/Cards/CarouselCard";
import { HoverEffect } from "@/components/Cards/HoverCard";

export function StaticWorkCards() {
	return (
		<div className="max-w-8xl mx-auto px-8 text-primary-content ">
			<HoverEffect
				items={staticWorkCardProps}
				className="flex flex-col bg-white"
			/>
		</div>
	);
}

const staticWorkCardProps: CarouselCardProps[] = [
	{
		title: "LMIA requirements for employers",
		overflowImageUrl: "/images/carouselCard/card1.png",
		body: (
			<div className="w-full flex flex-col gap-3 text-black">
				<ul className="list-disc list-outside">
					<li>{`Apply for LMIA to the Department of Employment and Social Development Canada
(ESDC).`}</li>
					<li>{`Obtain a positive or neutral LMIA`}</li>
					<li>{`Provide the foreign worker with a valid job offer`}</li>
					<li>{`Give the foreign candidate information about the employer address, name, start date,`}</li>
					<li>{` LMIA number and NOC (National Occupation Classification) number.`}</li>
					<li>{`The foreign worker can now apply for a work permit.`}</li>
				</ul>
			</div>
		),
	},
	{
		title: "LMIA process for candidates",
		overflowImageUrl: "/images/carouselCard/card2.png",
		body: (
			<div className="w-full flex flex-col gap-3 text-black">
				<ul className="list-disc list-outside">
					<li>{`Obtain a neutral or positive LMIA`}</li>
					<li>{`The employer must extend a job offer to the candidate, and provide a copy of the LMIA
and the job offer.`}</li>
					<li>{` The candidate can now apply for a temporary work permit in Canada (this can range
from a few days to a few years).`}</li>
				</ul>
			</div>
		),
	},
];
