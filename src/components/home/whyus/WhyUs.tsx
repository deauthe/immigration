import Wrapper from "@/components/mainComponents/Wrapper";
import Image from "next/image";
import React, { ReactNode } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const staticCardInfo: CardProps[] = [
	{
		title: "CREDIBILITY",
		description:
			"We have a credible track record and a unique approach towards each of our clients. We build, in our clients, the trust and confidence that we are here for you every step of the way.",
		icon: <VscWorkspaceTrusted />,
	},
	{
		title: "CREDIBILITY",
		description:
			"We have a credible track record and a unique approach towards each of our clients. We build, in our clients, the trust and confidence that we are here for you every step of the way.",
		icon: <VscWorkspaceTrusted />,
	},
	{
		title: "CREDIBILITY",
		description:
			"We have a credible track record and a unique approach towards each of our clients. We build, in our clients, the trust and confidence that we are here for you every step of the way.",
		icon: <VscWorkspaceTrusted />,
	},
	{
		title: "CREDIBILITY",
		description:
			"We have a credible track record and a unique approach towards each of our clients. We build, in our clients, the trust and confidence that we are here for you every step of the way.",
		icon: <VscWorkspaceTrusted />,
	},
];

const WhyUs = () => {
	return (
		<Wrapper>
			<div className="flex flex-col gap-10 ">
				<div className="grid grid-cols-2 gap-5 justify-between mb-10 bg-gradient-to-tl from-white to-red-1	00 p-10 rounded-lg">
					<div className="flex flex-col gap-5 w-3/4 mx-auto">
						<h1 className="uppercase text-6xl font-bold tracking-tighter bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text">
							Why Us
						</h1>
						<h2 className="uppercase text-3xl font-light tracking-tight">
							What sets Ask Kubeir apart?
						</h2>
						<h3 className="font-extralight text-lg tracking-normal">
							We, at Ask Kubeir Immigration Inc., are fully committed towards
							providing immense value while assisting you in your journey
							towards making your Canadian Immigration dream a reality.
						</h3>
					</div>
					<div className="mx-auto">
						<Image
							src="/whyUsImage.webp"
							alt="whyUs"
							width={400}
							height={400}
							className="mx-auto"
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-5 ">
					{staticCardInfo.map((item, index) => {
						return <Card key={index} {...item} />;
					})}
				</div>
			</div>
		</Wrapper>
	);
};

type CardProps = {
	title: string;
	description: string;
	icon: ReactNode;
};

const Card = (props: CardProps) => {
	const { title, description, icon } = props;
	return (
		<div className="text-center rounded-md flex flex-col gap-5 p-5  ">
			<div className="text-9xl mx-auto">{icon}</div>
			<h1 className="text-4xl  font-bold tracking-tighter bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text">
				{title}
			</h1>
			<h3 className="text-lg  font-light">{description}</h3>
		</div>
	);
};

export default WhyUs;
