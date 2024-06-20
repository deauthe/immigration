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
		title: "CREDIBILITY",
		description:
			"We have a credible track record and a unique approach towards each of our clients. We build, in our clients, the trust and confidence that we are here for you every step of the way.",
		icon: <VscWorkspaceTrusted />,
	},
	{
		title: "COMMITMENT TO ETHICS",
		description:
			"Your immigration, for us, is not just business, but the true purpose of our service towards you and your Canadian dream.",
		icon: <VscArchive />,
	},
	{
		title: "CREATIVE PERSPECTIVES",
		description:
			"Immigration Laws and trends keep changing on a day to day basis, and it is our professional responsibility to stay abreast with the latest happenings for each application and representation..",
		icon: <VscArrowCircleDown />,
	},
	{
		title: "CONSISTENT KNOWLEDGE UPDATE",
		description:
			"Every client has a different case and story, and effectively strategizing to arrive at the best possible solution with our experience and knowledge of Immigration law, is at the core of our service.",
		icon: <VscAccount />,
	},
];
