import ContactUs from "@/components/ContactUs/ContactUs";
import FaqSection from "@/components/Faq/faq";
import AboutUs from "@/components/home/aboutUs/AboutUs";
import Hero from "@/components/home/hero/Hero";
import WhyUs from "@/components/home/whyus/WhyUs";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col gap-10">
			<div className="mt-6">
				<Hero />
			</div>
			<div className="mt-20">
				<WhyUs />
				<div className="relative ">
					<ContactUs />
				</div>
			</div>

			<div className="mt-20">
				<AboutUs />
			</div>
			<div>
				<FaqSection />
			</div>
		</main>
	);
}
