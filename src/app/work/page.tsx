import BasicTemplateTopCard, {
	BasicTemplateTopCardProps,
} from "@/components/Cards/BasicTemplateTopCard";
import HomeCard, { HomeCardProps } from "@/components/home/HomeCard";
import Wrapper from "@/components/mainComponents/Wrapper";
import BasicTemplate from "@/components/Templates/BasicTemplate";
import { redirect } from "next/navigation";
import React from "react";
import { StaticWorkCards } from "./staticWorkCards";
import Link from "next/link";
import WorkCard, { WorkCardProps } from "./WorkCards";

type Props = {};

const topCardStatics: BasicTemplateTopCardProps = {
	title: "LMIA Work Permit",
	description: `An LMIA, also known as a Labour Market Impact Assessment, is a document issued by the
Government of Canada that states the impact a foreign worker would have entering the
workforce.`,
	button1: {
		title: "Free Assesment",
		action: async () => {
			"use server";
			redirect("/user-assessment");
		},
	},
	button2: {
		title: "Contact US",
		action: async () => {
			"use server";
			redirect("/contact");
		},
	},
	image: {
		src: "/images/work.png",
		width: 1000,
		height: 500,
		stretch: true,
	},
};

const workCardStatics: WorkCardProps = {
	title: "Work Permit",
	description: `When aiming to enter Canada on a work permit, getting a job is on the top of your priority list.
One way to get a job- and work permit in Canada is an LMIA (Labour Market Impact
Assessment). This document, issued by the government, states the impact a foreign worker
would have entering the workforce. To obtain a job, you should aim to get a Neutral or Positive
LMIA- this states that your entrance into the workforce would have no negative impact on
Canada’s economy. To obtain an LMIA, the employer and prospective employee must provide
certain documentation and justifications.`,
	image: "/images/work-card.png",
	link: { title: "contact", url: "/contact" },
	subText: "contact us to get personal doubts asked!",
};

const WorkPage = (props: Props) => {
	return (
		<div>
			<BasicTemplate worldMapBackground={false} className="">
				<BasicTemplateTopCard {...topCardStatics} />
			</BasicTemplate>
			<div className="relative -translate-y-20 z-10 sm:translate-y-0">
				<Wrapper className="relative z-10 max-h-96 ">
					<WorkCard {...workCardStatics} />
				</Wrapper>
			</div>
			<div className="relative">
				<Wrapper className="">
					<StaticWorkCards/>
				</Wrapper>
			</div>
		</div>
	);
};

export default WorkPage;
