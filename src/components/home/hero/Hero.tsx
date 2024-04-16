import Wrapper from "@/components/mainComponents/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};
const staticHeroCards: CardProps[] = [
	{
		title: "Get Started",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing",
		image: "",
		url: "/signup",
	},
	{
		title: "Get Started",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing",
		image: "",
		url: "/signup",
	},
	{
		title: "Get Started",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing",
		image: "",
		url: "/signup",
	},
];

const Hero = (props: Props) => {
	return (
		<Wrapper>
			<div className="bg-red-500  flex flex-col gap-10">
				<div className="grid grid-cols-12 gap-5  mx-10 bg-green-200 h-full">
					<div className="col-span-8 flex flex-col bg-red-300 h-fit my-auto ">
						<h1 className="text-3xl">WANT TO MIGRATE TO CANADA?</h1>
						<h2 className="text-5xl text-wrap w-1/2">
							{" "}
							CICC Licenced Immigration Consultants
						</h2>
					</div>
					<div className="col-span-4 bg-red-400 flex">
						<Image
							src={"/heroImage.webp"}
							width={400}
							height={400}
							alt="canada"
							className="my-auto mx-auto"
						/>
					</div>
				</div>
				<div className="mx-auto bg-purple-300  flex justify-between gap-5">
					{staticHeroCards.map((card, index) => {
						return <Card key={index} {...card} />;
					})}
				</div>
				<div className="mx-auto w-2/3 text-center flex gap-10 justify-between bg-red-800 px-44">
					<h1 className="my-auto text-xl font-bold">
						Expert Solutions for Your Immigration Requirements
					</h1>
					<h2 className="my-auto text-xl font-semibold">
						Our mission is to provide efficient legal representation and quality
						advice, enabling our clients to navigate the legal waters of
						Immigration law with ease.
					</h2>
				</div>
			</div>
		</Wrapper>
	);
};

type CardProps = {
	title: string;
	description: string;
	image: string;
	url: string;
};

const Card = (props: CardProps) => {
	const { title, description, image, url } = props;
	return (
		<div className="size-72 rounded-md flex flex-col gap-5 p-5 bg-red-400 ">
			<h1 className="text-4xl text-left font-bold tracking-tighter ">
				{title}
			</h1>
			<h3 className="text-lg text-left font-light">{description}</h3>
			<Link
				href={url}
				className="text-2xl text-left tracking-tight hover:translate-x-2 transition-all duration-100"
			>
				Read More
			</Link>
		</div>
	);
};

export default Hero;
