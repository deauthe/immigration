import FaqSection from "@/components/Faq/faq";

import Features from "@/components/home/Features/Features";

import Hero2 from "@/components/home/hero/Hero2";
import HomeCard, { HomeCardProps } from "@/components/home/HomeCard";

import WorldMapBackground from "@/components/mainComponents/WorldMapBackground";
import PageBreak from "@/components/PageBreak";

const statics: HomeCardProps = {
	title: "Canadian Immigration Services",
	description: `Coming to Canada is a big decision, which is why at BMOR Immigration
					Services, we pride ourselves on providing the highest quality
					consultations to our customers. With BMOR, you can rest assured that
					our consultants will take you on each step of the immigration process,
					to ensure that your experience is hassle-free.`,
	image: "/images/homeCard.jpeg",
	link: {
		title: "Free Assesment",
		url: "assesment-form",
	},
	subText: "Take this FREE assessment to see your eligibility status!",
};

export default function Home() {
	return (
		<main className="flex flex-col bg-transparent bg-dot-primary/70">
			<div className="">
				{/* <Hero /> */}
				<Hero2 />
				<div className="relative">
					<div className="relative z-10 bottom-20 lg:mx-20 md:mx-10 mx-5 max-h-96">
						<HomeCard
							image="/images/homeCard.jpeg"
							description={statics.description}
							title={statics.title}
							link={statics.link}
							subText={statics.subText}
						/>
					</div>
				</div>
			</div>
			{/* <div>
				<div className="relative ">
					<ContactUs />
				</div>
			</div> */}
			<div className="relative lg:pb-10 pb-5 ">
				{/* <div className="z-10 mb-10">
					<WhyUs />
				</div> */}
				<PageBreak label="Canadian Immigration Services" />
				<div className="z-10 mt-10 mx-2 md:mx-5">
					<Features />
				</div>
			</div>
		</main>
	);
}
