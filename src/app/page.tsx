import ContactUs from "@/components/ContactUs/ContactUs";
import FaqSection from "@/components/Faq/faq";
import AboutUs from "@/components/home/aboutUs/AboutUs";
import Features from "@/components/home/Features/Features";
import Hero from "@/components/home/hero/Hero";
import Hero2 from "@/components/home/hero/Hero2";
import HomeCard from "@/components/home/HomeCard";
import WhyUs from "@/components/home/whyus/WhyUs";
import WorldMapBackground from "@/components/mainComponents/WorldMapBackground";
import PageBreak from "@/components/PageBreak";
import { CldImage } from "next-cloudinary";

export default function Home() {
	return (
		<main className="flex flex-col bg-transparent">
			<div className="">
				{/* <Hero /> */}
				<Hero2 />
				<div className="relative ">
					<WorldMapBackground />
					<div className="relative z-10 bottom-20 lg:mx-20 md:mx-10 mx-5 max-h-96">
						<HomeCard />
					</div>
				</div>
			</div>
			{/* <div>
				<div className="relative ">
					<ContactUs />
				</div>
			</div> */}
			<div className="relative bg-base-100 lg:pb-10 pb-5">
				<WorldMapBackground />
				{/* <div className="z-10 mb-10">
					<WhyUs />
				</div> */}
				<PageBreak label="Canadian Immigration Services" />
				<div className="z-10 mt-10 mx-2 md:mx-5">
					<Features />
				</div>
			</div>
			{/* <div className=" z-10" id="AboutUs">
				<AboutUs />
			</div> */}
			<div>
				<FaqSection />
			</div>
		</main>
	);
}
