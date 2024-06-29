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

function AboutUs() {
	return (
		<BasicTemplate worldMapBackground={true} className="">
			<div className="md:grid grid-cols-2 flex flex-col md:gap-10 gap-5 text-primary-content w-full z-10  lg:px-32 md:px-16 px-10 py-5">
				{/* image  */}
				<div className="max-h-96">
					<Image
						src={"/about-us.png"}
						alt="about us"
						width={600}
						height={600}
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>

				{/* text  */}
				<div className="flex flex-col gap-3 md:gap-6 my-auto">
					<h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
					<p>
						{`A Regulated Canadian Immigration Consultant (RCIC) licensed under the Immigration Consultants of Canada Regulatory Council (ICCRC) with license number R706180, he is also a member of The Canadian Association of Professional Immigration Consultants (CAPIC) member ID R21006.
                    He is the driving force and the face of Ask Kubeir. An ardent believer who is Forever Hopeful, his commitment, passion and transparency towards his work is what his clients and audience seek. Certification of Recognition`}
					</p>
				</div>
			</div>
			<div className="relative w-full  z-10 mt-10">
				<AboutUsCard />
			</div>

			{/* pillars/ key points  */}
			<div className="z-10 w-full mt-10 flex flex-col gap-10">
				{/* heading  */}
				<div className="grid grid-cols-3 lg:mx-20 md:mx-10 mx-5 gap-3">
					<hr className="my-auto bg-neutral/20 h-[2px]" />

					<h1 className="uppercase text-xl md:text-2xl lg:text-3xl text-neutral-content font-bold tracking-tighter w-fit mx-auto">
						Pillars of BMOR
					</h1>
					<hr className="my-auto bg-neutral/20 h-[2px]" />
				</div>

				{/* grid  */}
				<div className="grid gap-5 grid-cols-2 lg:mx-20 md:mx-10 mx-5">
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
