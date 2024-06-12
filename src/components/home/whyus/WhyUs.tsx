import Wrapper from "@/components/mainComponents/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import {
	VscAccount,
	VscArchive,
	VscArrowCircleDown,
	VscWorkspaceTrusted,
} from "react-icons/vsc";

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
		icon: <VscArchive />,
	},
	{
		title: "CREDIBILITY",
		description:
			"We have a credible track record and a unique approach towards each of our clients. We build, in our clients, the trust and confidence that we are here for you every step of the way.",
		icon: <VscArrowCircleDown />,
	},
	{
		title: "CREDIBILITY",
		description:
			"We have a credible track record and a unique approach towards each of our clients. We build, in our clients, the trust and confidence that we are here for you every step of the way.",
		icon: <VscAccount />,
	},
];

const WhyUs = () => {
	return (
		<Wrapper>
			<div className="du-card lg:du-card-side bg-black text-primary-content md:du-bordered shadow-xl lg:max-w-screen-lg mx-auto mt-5 px-3 md:px-3 lg:px-0">
				<figure className="max-h-96">
					<Image src="/mapleLeaf.jpg" alt="whyUs" width={1000} height={1000} />
				</figure>
				<div className="du-card-body prose-md ">
					<h1 className="du-card-title font-extrabold text-5xl uppercase tracking-tighter">
						Why Us
					</h1>
					<p className="text-2xl font-normal">What sets Ask Kubeir apart?</p>
					<p className="lg:w-1/2 text-pretty font-extralight">
						We, at Ask Kubeir Immigration Inc., are fully committed towards
						providing immense value while assisting you in your journey towards
						making your Canadian Immigration dream a reality.
					</p>
					<div className="du-card-actions md:justify-start justify-center">
						<Link href={"/assesment-form"} className="du-btn du-btn-primary">
							Get A Free Assesment
						</Link>
					</div>
				</div>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-2 mt-10 mx-2 md:mx-0">
				{staticCardInfo.map((item, index) => {
					return <Card key={index} {...item} />;
				})}
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
		<div className="du-card bg-primary text-primary-foreground p-5 shadow-lg">
			<div className="du-card-title mx-auto text-8xl ">{icon}</div>
			<h1 className="du-card-title mx-auto pt-2">{title}</h1>
			<h3 className="du-card-body mx-auto md:w-3/4 w-11/12 text-center">
				{description}
			</h3>
		</div>
	);
};

export default WhyUs;
