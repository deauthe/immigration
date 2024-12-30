import BasicTemplate from "@/components/Templates/BasicTemplate";
import Image from "next/image";
import React from "react";

import BasicTemplateTopCard, {
	BasicTemplateTopCardProps,
} from "@/components/Cards/BasicTemplateTopCard";
import Wrapper from "@/components/mainComponents/Wrapper";
import CarouselDApiDemo from "@/components/Carousel/Carousel";
import {
	StaticExpressCards,
	staticExpressStepCards,
} from "./static-express-cards";
import CarouselVertical from "@/components/Carousel/CarouselVertical";
import Advantages from "./Advantages";

const topCardStatics: BasicTemplateTopCardProps = {
	title: "Express Entry Immigration",
	description: `If you are a skilled worker, Express Entry is one of the easiest- and popular pathways for
entering Canada.`,
	image: {
		height: 300,
		width: 300,
		src: "/images/express-entry.png",
	},
};

function ExpressEntry() {
	return (
		<BasicTemplate worldMapBackground={false} className="">
			<BasicTemplateTopCard
				title={topCardStatics.title}
				description={topCardStatics.description}
				image={topCardStatics.image}
			/>

			{/* pillars/ key points  */}
			<div className="z-10 w-full lg:mt-10 mt-5 flex flex-col lg:gap-10 gap-2">
				{/* heading  */}
				<Wrapper className="overflow-visible w-full text-center rounded-t-xl rounded-badge bg-white md:bg-transparent">
					<div className="lg:text-6xl text-4xl font-extrabold  my-2 tracking-tight text-black md:text-primary-content ">
						Express Entry Programs
					</div>
					<div className="lg:text-lg md:text-md text-sm font-light tracking-tight text-black md:text-primary-content">
						There are three main programs within the Express Entry pathway:
					</div>

					<StaticExpressCards />
				</Wrapper>
				<Wrapper className="overflow-visible w-full text-center ">
					<div className="text-4xl md:text-5xl lg:text-6xl  font-extrabold  xl:mb-10 mb-5 xl:text-base-100">
						How can you apply to Express Entry?
					</div>

					<div className="mx-auto w-fit">
						<CarouselVertical
							autoScrollDuration={4000}
							carouselItems={staticExpressStepCards}
							pagination={true}
						/>
					</div>
				</Wrapper>
				<Wrapper>
					<div className="flex flex-col gap-3">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mx-auto mb-5 text-center uppercase tracking-tight">
							Advantages of Express Entry
						</h2>
					</div>
					<Advantages />
				</Wrapper>
			</div>
		</BasicTemplate>
	);
}

export default ExpressEntry;
