import Wrapper from "@/components/mainComponents/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { GiLaurelsTrophy } from "react-icons/gi";

const AboutUs = () => {
	return (
		<div className="flex flex-col gap-10 bg-black items-center py-5 lg:px-10">
			<div className="md:grid md:grid-cols-2 flex flex-col gap-5 justify-between text-center md:text-left">
				<div className="mx-auto flex rounded-3xl overflow-hidden">
					<Image
						src="/ceo.webp"
						alt="whyUs"
						width={300}
						height={300}
						className="mx-auto my-auto"
					/>
				</div>
				<div className="du-card lg:px-10  lg:prose-md prose-xs mx-2 lg:mx-0 px-3">
					<h1 className="du-card-title uppercase text-6xl font-bold tracking-tighter bg-gradient-to-r from-white to-primary-content text-transparent bg-clip-text mx-auto md:mx-0">
						About Us
					</h1>
					<h2 className="du-card-title uppercase text-3xl font-light tracking-tight text-primary-content">
						Kubeir Kamal, aka Kamal Lalwani, is the founder of Ask Kubeir
						Immigration
					</h2>
					<h3 className="font-extralight text-lg tracking-normal du-card-body text-primary-foreground">
						A Regulated Canadian Immigration Consultant (RCIC) licensed under
						the Immigration Consultants of Canada Regulatory Council (ICCRC)
						with license number R706180, he is also a member of The Canadian
						Association of Professional Immigration Consultants (CAPIC) member
						ID R21006. He is the driving force and the face of Ask Kubeir. An
						ardent believer who is Forever Hopeful, his commitment, passion and
						transparency towards his work is what his clients and audience seek.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
