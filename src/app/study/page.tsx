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
	title: "University in Canada:",
	description: `Canada is renowned globally for its stellar post-secondary institutions, and excellent academic
standards. Discover why studying at a university in Canada is a great way to kick-start a
successful professional career and get your dream job.`,
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
		stretch: true,
	},
};

const homeCardStatics: HomeCardProps = {
	title: "University in Canada",
	description: `Canadian universities offer a wide variety of undergraduate programs. There are over 15,000
undergraduate and professional degrees, programs, diplomas and certificates, in diverse
disciplines. You can also enrich your education by taking specialized programs that provide
students with hands-on experiences, including internships and co-op.`,
	image: "/images/universityCard.png",
	link: { title: "free assesments", url: "/assessment-form" },
	subText: "Take this FREE assessment to see your eligibility status!",
};

const Study = (props: Props) => {
	return (
		<BasicTemplate worldMapBackground={false} className="">
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
				<ul className="list list-outside">
					<li className="opacity-90">{`Canada has an exceptional reputation in education, with many Canadian universities
ranking top in the world.`}</li>
					<li className="opacity-90">{`There is an incredible range of study disciplines- there are over 96 public education
institutions and over 15,000 programs of study.`}</li>
					<li className="opacity-90">{`Canadian universities are affordable, with an average undergraduate program costing
around 33,000 CAD.`}</li>
					<li className="opacity-90">{`Canada is one of the most welcoming countries for international students.`}</li>
				</ul>
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
					Any non-Canadian student who is living abroad requires a study permit
					to complete education in Canada, unless otherwise exempted by the
					government.
				</p>
			</div>

			<div className="w-full">
				<h2 className="lg:text-2xl md:text-xl text-lg font-bold tracking-tighter">
					Designated Learning Institutions
				</h2>
				<p>
					International students require institutions that are able to host you.
					These are qualified as a Designated Learning Institution (DLI) by the
					provincial or federal government.
				</p>
			</div>
			<div className="w-full">
				<h2 className="lg:text-2xl md:text-xl text-lg font-bold tracking-tighter">
					Period of Study Permits
				</h2>
				<p>
					A study permit is usually valid for the entire length of your study
					program, and an additional 90 days. These 90 days are given to help
					you prepare to leave Canada, or apply to extend your stay. Proof of
					your program’s end date can be verified through a completion letter,
					transcript, degree or diploma issued by your institution.
				</p>
			</div>
		</div>
	);
};

const UniversityCollapsibleCardProps = {
	title: "Why Choose University in Canada?",
	subHeading: `Canada has an exceptional reputation in education, with many Canadian universities
ranking top in the world.`,
	body: <UniversityCollapsibleCard />,
};

const CollapsibleCard2Props = {
	title: "Levels Of Study",
	subHeading: `When studying in Canada, you may begin by earning a diploma or undergraduate degree. The
next tier of education would be post graduate- these programs include masters, PhD’s, or
specialized graduate programs like medical school or law school.`,
	body: <CollapsibleCard2 />,
};
