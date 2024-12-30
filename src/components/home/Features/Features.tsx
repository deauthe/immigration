import Link from "next/link";
import React from "react";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

const staticCards: CardProps[] = [
	{
		title: "Immigrate to Canada",
		description:
			"Canada has over 150 immigration programs available for foreign nationals who wish to immigrate to Canada and become permanent residents. Whether you're a skilled worker, entrepreneur, investor, or coming with your family, there’s a program for you. At BMOR immigration, we will assess your skills and eligibility to find the perfect program for you.",
		image: "/images/card1.jpeg",
		href: "express-entry",
	},
	{
		title: "Business Immigration",
		description:
			"Are you a Business owner who wants to live in Canada? Business owners who wish to relocate to Canada may apply for a business visa under one of the business immigration programs. There are many opportunities for foreign investors to grow their business while fast-tracking their immigration process to becoming a Canadian resident.",
		image: "/images/card2.jpeg",
		href: "/work",
	},
	{
		title: "Work in Canada",
		description:
			"Canada welcomes millions of skilled immigrants each year to work in the Canadian economy while advancing their professional goals. There are plenty of work permits to apply to, based on your personal skills and status.",
		image: "/images/card3.jpeg",
		href: "/work",
	},
];

type Props = {};

function Features({}: Props) {
	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:gap-7 mx-auto">
			{staticCards.map((card, index) => {
				return (
					<Card
						key={index}
						title={card.title}
						description={card.description}
						image={card.image}
						href={card.href}
					/>
				);
			})}
		</div>
	);
}

export default Features;

interface CardProps {
	title: string;
	description: string;
	image: string;
	href?: string;
}
const Card = (props: CardProps) => {
	return (
		<div className="du-card bg-base-100 du-image-full w-full shadow-xl h-full mx-auto">
			<figure className="">
				<Image
					src={props.image}
					className="object-cover rounded-none w-full h-full"
					width={"200"}
					height={"200"}
					loading="lazy"
					alt=""
				/>
			</figure>
			<div className="du-card-body rounded-none">
				<h2 className="du-card-title">{props.title}</h2>
				<p>{props.description}</p>
				<div className="du-card-actions justify-end">
					<Link
						href={props.href || "/"}
						className="du-btn du-btn-ghost rounded-full"
					>
						<ArrowBigRight />
					</Link>
				</div>
			</div>
		</div>
	);
};
