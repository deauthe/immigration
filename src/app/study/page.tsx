import BasicTemplateTopCard, {
	BasicTemplateTopCardProps,
} from "@/components/Cards/BasicTemplateTopCard";
import HomeCard, { HomeCardProps } from "@/components/home/HomeCard";
import BasicTemplate from "@/components/Templates/BasicTemplate";
import React from "react";

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
				<div className="relative z-10 lg:mx-20 md:mx-10 mx-5 max-h-96 lg:my-10 md:">
					<HomeCard
						description={homeCardStatics.description}
						image={homeCardStatics.image}
						link={homeCardStatics.link}
						title={homeCardStatics.title}
						subText={homeCardStatics.subText}
					/>
				</div>
			</div>
		</BasicTemplate>
	);
};

export default Study;
