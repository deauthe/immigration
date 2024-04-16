import Hero from "@/components/home/hero/Hero";
import WhyUs from "@/components/home/whyus/WhyUs";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col gap-10">
			<Hero />
			<WhyUs />
		</main>
	);
}
