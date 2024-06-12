import ContactUs from "@/components/ContactUs/ContactUs";
import FaqSection from "@/components/Faq/faq";
import AboutUs from "@/components/home/aboutUs/AboutUs";
import Hero from "@/components/home/hero/Hero";
import Hero2 from "@/components/home/hero/Hero2";
import WhyUs from "@/components/home/whyus/WhyUs";

export default function Home() {
	return (
		<main className="flex flex-col bg-black">
			<div className="">
				<Hero2 />
				{/* <Hero /> */}
			</div>
			<div>
				<div className="relative ">
					<ContactUs />
				</div>
				<WhyUs />
			</div>

			<div className="mt-10" id="AboutUs">
				<AboutUs />
			</div>
			<div>
				<FaqSection />
			</div>
		</main>
	);
}
