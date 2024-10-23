import BasicTemplate from "@/components/Templates/BasicTemplate";
import Image from "next/image";
import React from "react";
import AboutUsCard, { AboutUsCard2 } from "./AboutUsCard";
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
import {
	HoverEffect,
	HoverEffectCardProps,
} from "@/components/Cards/HoverCard";
import { StaticPillarCards } from "./staticCards";

const topCardStatics: BasicTemplateTopCardProps = {
	title: "About Us",
	description: `BMOR Immigration is a professional consultancy service that prides itself on reliable, accurate
guidance for immigration-related queries. Our consultants are committed to creating long-lasting
relationships with our clients, through one-on-one consultations and personalized applications.`,
	image: {
		height: 400,
		width: 400,
		src: "/about-us.png",
	},
};

function AboutUs() {
	return (
		<BasicTemplate worldMapBackground={false} className="">
			<BasicTemplateTopCard
				title={topCardStatics.title}
				description={topCardStatics.description}
				image={topCardStatics.image}
			/>

			<div className="relative -translate-y-2 md:translate-y-0 z-10 lg:mt-10 md:mt-5 w-full">
				<AboutUsCard2 />
			</div>

			{/* pillars/ key points  */}
			<div className="z-10 w-full mt-10 flex flex-col md:gap-10 gap-0">
				{/* heading  */}
				<PageBreak label="Pillars of bmor" />

				{/* grid  */}
				<StaticPillarCards />
			</div>
		</BasicTemplate>
	);
}

export default AboutUs;
