import Wrapper from "@/components/mainComponents/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaGoogleScholar } from "react-icons/fa6";

type Props = {};
const staticHeroCards: CardProps[] = [
	{
		icon: <FaGoogleScholar />,
		title: "Get Started",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing",
		image: "",
		url: "/signup",
	},
	{
		icon: <FaGoogleScholar />,
		title: "Get Started",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing",
		image: "",
		url: "/signup",
	},
	{
		icon: <FaGoogleScholar />,
		title: "Get Started",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing",
		image: "",
		url: "/signup",
	},
];

const Hero = (props: Props) => {
	return (
		<Wrapper>
			<div className="  flex flex-col gap-10">
				<div className="md:grid md:grid-cols-12 flex flex-col gap-5 mx-10 p-4 shadow-md bg-gray-100/[0.9] rounded-md h-full">
					<div className="col-span-8 flex flex-col  h-fit my-auto ">
						<h1 className="text-3xl uppercase font-extrabold bg-gradient-to-br from-black to-red-500 text-transparent bg-clip-text mb-5">
							WANT TO MIGRATE TO CANADA?
						</h1>
						<h2 className="text-5xl text-wrap md:w-1/2 w-full font-bold bg-gradient-to-tr from-black to-red-500 text-transparent bg-clip-text">
							{" "}
							CICC Licenced Immigration Consultants
						</h2>
					</div>
					<div className="col-span-4  flex">
						<Image
							src={"/heroImage.webp"}
							width={400}
							height={400}
							alt="canada"
							className="my-auto mx-auto"
						/>
					</div>
				</div>
				<div className="mx-auto flex flex-col md:flex-row md:justify-between gap-3">
					{staticHeroCards.map((card, index) => {
						return <Card key={index} {...card} />;
					})}
				</div>
				<div className="mx-auto w-2/3 text-center grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 lg:px-44 md:px-28 px-3">
					<h1 className="my-auto text-xl  font-normal tracking-tighter mx-auto bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text">
						Expert Solutions for Your Immigration Requirements
					</h1>
					<h2 className="my-auto text-xl font-light tracking-tighter mx-auto">
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
	icon: ReactNode;
	title: string;
	description: string;
	image: string;
	url: string;
};

const Card = (props: CardProps) => {
	const { icon, title, description, image, url } = props;
	return (
		<div className="lg:size-72 md:size-64 rounded-md flex flex-col lg:gap-5 md:gap-4 gap-3 lg:p-5 md:p-4 p-2 shadow-md bg-black text-white hover:border-red-600 border-transparent transition-all duration-300 border-[1px] ">
			<h1 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold tracking-tighter w-fit mx-auto ">
				{icon}
			</h1>
			<h1 className="lg:text-4xl md:text-3xl text-2xl text-center font-bold tracking-tighter ">
				{title}
			</h1>
			<h3 className="text-lg text-center font-light">{description}</h3>
			<Link
				href={url}
				className="text-xl md:text-2xl text-center tracking-tight hover:scale-[102%] transition-all duration-100"
			>
				Read More
			</Link>
		</div>
	);
};

export default Hero;
