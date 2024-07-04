import BasicTemplateTopCard, {
	BasicTemplateTopCardProps,
} from "@/components/Cards/BasicTemplateTopCard";
import CollapsibleCard from "@/components/Cards/CollapsibleCard";
import HomeCard, { HomeCardProps } from "@/components/home/HomeCard";
import Wrapper from "@/components/mainComponents/Wrapper";
import BasicTemplate from "@/components/Templates/BasicTemplate";
import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import { StaticStudyCards } from "./staticStudyCards";

type Props = {};

const topCardStatics: BasicTemplateTopCardProps = {
	title: "Study",
	description: `Studying at a university in Canada will improve your chances of finding your dream job.
     Canadian post-secondary education is known for its high quality and excellent academic
     standards. Discover why Canada is one of the most popular destinations for international students`,
	button1: {
		title: "Free Assesment",
		action: async () => {
			"use server";
		},
	},
	button2: {
		title: "Free Assesment",
		action: async () => {
			"use server";
		},
	},
	image: {
		src: "/images/study.png",
		width: 1000,
		height: 500,
	},
};

const homeCardStatics: HomeCardProps = {
	title: "University in Canada",
	description: `Universities in Canada offer more than 15,000 undergradu­ate and graduate degree programs and professional degree programs, diplomas, and certificates – in a broad range of disciplines. In addition, Canadian universities offer many programs that provide students with hands-on experiences, including co-op training and internships`,
	image: "/images/universityCard.png",
	link: { title: "free assesments", url: "/assessment-form" },
	subText: "Take this FREE assessment to see your eligibility status!",
};

const Study = (props: Props) => {
	return (
		<BasicTemplate worldMapBackground className="">
			<BasicTemplateTopCard
				title={topCardStatics.title}
				description={topCardStatics.description}
				button1={topCardStatics.button1}
				button2={topCardStatics.button2}
				image={topCardStatics.image}
			/>

			<div className="relative">
				<Wrapper className="relative z-10 max-h-96 ">
					<HomeCard
						description={homeCardStatics.description}
						image={homeCardStatics.image}
						link={homeCardStatics.link}
						title={homeCardStatics.title}
						subText={homeCardStatics.subText}
					/>
				</Wrapper>
			</div>

			<Wrapper className="z-20">
				<CollapsibleCard
					title={UniversityCollapsibleCardProps.title}
					subHeading={UniversityCollapsibleCardProps.subHeading}
					body={UniversityCollapsibleCardProps.body}
				/>
			</Wrapper>

			<Wrapper className="overflow-visible w-full">
				<StaticStudyCards />
			</Wrapper>

			<Wrapper className="">
				<CollapsibleCard
					title={CollapsibleCard2Props.title}
					subHeading={CollapsibleCard2Props.subHeading}
					body={CollapsibleCard2Props.body}
				/>
			</Wrapper>
		</BasicTemplate>
	);
};

export default Study;

const UniversityCollapsibleCard = () => {
	return (
		<div className="w-full flex flex-col gap-5 text-left">
			<div className="w-full">
				<h2 className="lg:text-2xl md:text-xl text-lg font-bold tracking-tighter">
					Programs and Area of Study
				</h2>
				<p>
					Some of the most in-demand study options in Canada that can help you
					find a job are quicker are: Cybersecurity, Nursing, Civil Engineering,
					Software Engineering, Electrics, Mechanics, Plumbing and Carpentry.
				</p>
			</div>

			<div className="w-full">
				<h2 className="lg:text-2xl md:text-xl text-lg font-bold tracking-tighter">
					Universities in Canada
				</h2>
				<p>
					Some of the most in-demand study options in Canada that can help you
					find a job are quicker are: Cybersecurity, Nursing, Civil Engineering,
					Software Engineering, Electrics, Mechanics, Plumbing and Carpentry.
				</p>
			</div>
		</div>
	);
};

const CollapsibleCard2 = () => {
	return (
		<div className="w-full flex flex-col gap-5 text-left">
			<div className="w-full">
				<h2 className="lg:text-2xl md:text-xl text-lg font-bold tracking-tighter">
					Who Needs a Study Permit
				</h2>
				<p>
					As a non-Canadian who lives abroad (note: this does not apply to
					someone with a current Permanent Resident PR status), you will require
					a study permit to study in Canada unless exempted.
				</p>
			</div>

			<div className="w-full">
				<h2 className="lg:text-2xl md:text-xl text-lg font-bold tracking-tighter">
					Designated Learning Institutions
				</h2>
				<p>
					As an international student, you will require an institution that can
					host you. What makes a school qualified is having been approved as a
					Designated Learning Institution (DLI) by a provincial or territorial
					government.
				</p>
			</div>
			<div className="w-full">
				<h2 className="lg:text-2xl md:text-xl text-lg font-bold tracking-tighter">
					Period of Study Permit
				</h2>
				<ul className="list-disc list-inside">
					<li className="list-item">{`A study permit is usually valid for the length of your study program, plus an extra 90 days. The 90 days lets you prepare to leave Canada or apply to extend your stay.`}</li>
					<li className="list-item">{`A study permit is usually valid for the length of your study program, plus an extra 90 days. The 90 days lets you prepare to leave Canada or apply to extend your stay.`}</li>
				</ul>
			</div>
		</div>
	);
};

const UniversityCollapsibleCardProps = {
	title: "Univerity In Canada",
	subHeading:
		"Canada is one of the most popular destinations for international students. Canadian degrees are highly recognized worldwide and can help you to find your dream job",
	body: <UniversityCollapsibleCard />,
};

const CollapsibleCard2Props = {
	title: "Levels Of Study",
	subHeading:
		"When studying in Canada, you may start by earning a diploma or a degree and make your way up to the next levels of post-graduate programs – A masters or Ph.D.",
	body: <CollapsibleCard2 />,
};
