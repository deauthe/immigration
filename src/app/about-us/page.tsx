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
	description: `A Regulated Canadian Immigration Consultant (RCIC) licensed under the Immigration Consultants of Canada Regulatory Council (ICCRC) with 
					license number R706180, he is also a member of The Canadian Association of Professional Immigration Consultants (CAPIC) member ID R21006.
                    He is the driving force and the face of Ask Kubeir. An ardent believer who is Forever Hopeful, his commitment, passion and transparency 
					towards his work is what his clients and audience seek. Certification of Recognition`,
	image: {
		height: 600,
		width: 600,
		src: "/about-us.png",
		stretch: true,
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
