import BasicTemplate from "@/components/Templates/BasicTemplate";
import Image from "next/image";
import React from "react";
import AboutUsCard from "./AboutUsCard";
import {
	VscAccount,
	VscArchive,
	VscArrowCircleDown,
	VscWorkspaceTrusted,
} from "react-icons/vsc";
import BasicTemplateTopCard, {
	BasicTemplateTopCardProps,
} from "@/components/Cards/BasicTemplateTopCard";
import { HomeCardProps } from "@/components/home/HomeCard";
import PageBreak from "@/components/PageBreak";

const topCardStatics: BasicTemplateTopCardProps = {
	title: "About Us",
	description: `A Regulated Canadian Immigration Consultant (RCIC) licensed under the Immigration Consultants of Canada Regulatory Council (ICCRC) with 
					license number R706180, he is also a member of The Canadian Association of Professional Immigration Consultants (CAPIC) member ID R21006.
                    He is the driving force and the face of Ask Kubeir. An ardent believer who is Forever Hopeful, his commitment, passion and transparency 
					towards his work is what his clients and audience seek. Certification of Recognition`,
	image: {
		height: 600,
		width: 600,
		src: "/about-us.png",
	},
};

function AboutUs() {
	return (
		<BasicTemplate worldMapBackground={true} className="">
			<BasicTemplateTopCard
				title={topCardStatics.title}
				description={topCardStatics.description}
				image={topCardStatics.image}
			/>

			<div className="relative w-full  z-10 mt-10">
				<AboutUsCard />
			</div>

			{/* pillars/ key points  */}
			<div className="z-10 w-full mt-10 flex flex-col gap-10">
				{/* heading  */}
				<PageBreak label="Pillars of bmor" />

				{/* grid  */}
				<div className="flex flex-col gap-2 md:grid md:gap-5 md:grid-cols-2 lg:mx-20 md:mx-10 mx-5">
					{staticCardInfo.map((card, index) => {
						return <Card key={index} {...card} />;
					})}
				</div>
			</div>
		</BasicTemplate>
	);
}

export default AboutUs;

type CardProps = {
	title: string;
	description: string;
	icon: React.ReactNode;
};

function Card({ title, description, icon }: CardProps) {
	return (
		<div className="du-card bg-base-100/60 text-muted p-5 shadow-lg rounded-none">
			<div className="du-card-title mx-auto text-3xl ">{icon}</div>
			<h1 className="du-card-title mx-auto pt-2 mt-2">{title}</h1>
			<h3 className="du-card-body mx-auto  text-center">{description}</h3>
		</div>
	);
}

const staticCardInfo: CardProps[] = [
	{
		title: "Reliability",
		description:
			"We value our relationships with our clients. That’s why we aim to create the best possible experience for you during our consultations. You can rest assured that we at BMOR will be here to support you every step of the way, and ensure you reach your goals, ",
		icon: <VscWorkspaceTrusted />,
	},
	{
		title: "Humanism",
		description:
			"There’s no cookie-cutter client. Each individual is different, with a unique story and path in life. That’s why our consultants will use their immigration expertise to find the best solution for YOU.",
		icon: <VscArchive />,
	},
	{
		title: "Ethics:",
		description:
			"Immigration is not simply business. It is the key to the dreams and hopes of many people, including you. We respect this, and are committed to help you fulfill your dreams.",
		icon: <VscArrowCircleDown />,
	},
	{
		title: "Responsibility",
		description:
			"The world of immigration is ever-changing, and our consultants are highly skilled with providing the most up-to-date information on laws and trends. This ensures that your application is as precise as possible.",
		icon: <VscAccount />,
	},
];
