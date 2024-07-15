import CarouselCard, {
	CarouselCardProps,
} from "@/components/Cards/CarouselCard";
import CarouselCardVertical from "@/components/Cards/CarouselCardVertical";
import { HoverEffect } from "@/components/Cards/HoverCard";

export function StaticExpressCards() {
	return (
		<div className="max-w-8xl mx-auto px-8">
			<HoverEffect items={staticExpressCardProps} />
		</div>
	);
}

const staticExpressCardProps: CarouselCardProps[] = [
	{
		title: "Canadian Experience Class",

		overflowImageUrl: "/images/carouselCard/card1.png",
		body: (
			<div className="w-full flex flex-col gap-3 text-black">
				This program has been created for skilled workers that have canadian
				work experience within the past 3 years.
			</div>
		),
	},
	{
		title: "Federal Skilled Worker Program",

		overflowImageUrl: "/images/carouselCard/card2.png",
		body: (
			<div className="w-full flex flex-col gap-3 text-black">
				This program is ideal for those with any work experience, whether
				Canadian or foreign.
			</div>
		),
	},
	{
		title: "Federal Skilled Trades Program",
		overflowImageUrl: "/images/carouselCard/card2.png",
		body: (
			<div className="w-full flex flex-col gap-3 text-black text-left">
				This program is for skilled workers who have obtained a qualification
				for a skilled trade- job offer or certificate of qualification is
				required.
			</div>
		),
	},
];

const staticExpressStepProps: CarouselCardProps[] = [
	{
		title: "Step 1: Confirm your Eligibility",
		overflowImageUrl: "/images/carouselCard/card1.png",
		body: (
			<div className="w-full flex flex-col gap-3">
				You can confirm your eligibility by completing the form on the website
				(hyperlink to form), or completing the form on the Canadian Government’s
				website (hyperlink to form on website). These questions will be based on
				things like your age, nationality, language ability and education
				experience.
			</div>
		),
	},
	{
		title: "Step 2: Check your score",
		overflowImageUrl: "/images/carouselCard/card2.png",
		body: (
			<div className="w-full flex flex-col gap-3">
				Applicants to Express Entry are ranked based on the Comprehensive
				Ranking System (CRS). It is a point-based system used to assess your
				profile and compare it to the rest of the pool. TO be considered for an
				invitation, you must score above the minimum points score for your
				round.
			</div>
		),
	},
	{
		title: "Step 3: Submit your profile",
		overflowImageUrl: "/images/carouselCard/card2.png",
		body: (
			<div className="w-full flex flex-col gap-3">
				The Express Entry profile is where you give information about yourself.
				To fill out the form, you will need information from specific documents.
				The documents you would need to fill out the form is the following: - A
				passport or travel document - Language Test results - Proof of work
				experience - Proof of funds.
			</div>
		),
	},
	{
		title: "check",
		overflowImageUrl: "/images/carouselCard/card2.png",
		body: (
			<div className="w-full flex flex-col gap-3">
				If you are applying to a specific program within Express Entry, you may
				need the following documents: - Proof of Canadian Education or an
				Educational Credential Assessment Form (if you are applying to the
				Federal Skilled Workers Program). - Provincial Nomination - Written Job
				offer from an employer in Canada - Certificate of qualification in a
				trade occupation issued by a Canadian province or territory
			</div>
		),
	},
	{
		title: "Step 4: Receive an invitation and apply",
		subheading: "University of British Columbia",
		overflowImageUrl: "/images/carouselCard/card2.png",
		body: (
			<div className="w-full flex flex-col gap-3">
				Applications that have all the required documentation are often
				processed in 6 months or less. If you have received an invitation, you
				have 60 days to submit your application for permanent residence.
			</div>
		),
	},
];

export const staticExpressStepCards = staticExpressStepProps.map(
	(item, index) => {
		return <CarouselCardVertical key={index} {...item} />;
	}
);
