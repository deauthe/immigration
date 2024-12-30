import { CarouselCardProps } from "@/components/Cards/CarouselCard";
import { HoverEffect } from "@/components/Cards/HoverCard";

export function StaticStudyCards() {
	return (
		<div className="max-w-8xl mx-auto px-8 text-primary-content">
			<HoverEffect items={staticStudyCardProps} />
		</div>
	);
}

const staticStudyCardProps: CarouselCardProps[] = [
	{
		title: "University in Canada",
		subheading: "University of British Columbia",
		overflowImageUrl: "/images/carouselCard/card1.png",
		body: (
			<div className="w-full flex flex-col gap-3 text-black">
				<ul className="list-disc list-outside">
					<li>{`Depending on your profile and needs, you can choose to study in English or French.• Canadian universities are affordable.`}</li>
					<li>{`An average undergraduate program is around CAD 33.000.• Based on their needs and budget, international students often choose cities like Montreal, Vancouver or Toronto.`}</li>
					<li>{`Global leader at innovation`}</li>
					<li>{` Universities with opportunities for everyone`}</li>
					<li>{` Cost of university in Canada`}</li>
				</ul>
			</div>
		),
	},
	{
		title: "Global leader at innovation",
		subheading: "University of British Columbia",
		overflowImageUrl: "/images/carouselCard/card2.png",
		body: (
			<div className="w-full flex flex-col gap-3 text-black">
				<ul className="list-disc list-inside">
					<li>{`Interested in research? So are we! Our universities conduct research at one of the world’s highest rates. Canada’s thriving research culture exceeds the G7 average in terms of impact in the fields of clinical medicine; biology; information and communication technologies; agriculture; fisheries and forestry; earth.`}</li>
					<li>{` An average undergraduate program is around CAD 33.000. Based on their needs and budget, international students often choose cities like Montreal, Vancouver or Toronto.`}</li>
					<li>{` Global leader at innovation`}</li>
				</ul>
			</div>
		),
	},
];
