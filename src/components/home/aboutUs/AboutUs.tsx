import Wrapper from "@/components/mainComponents/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { GiLaurelsTrophy } from "react-icons/gi";

const AboutUs = () => {
	return (
		<Wrapper>
			<div className="flex flex-col gap-10 ">
				<div className="grid grid-cols-2 gap-5 justify-between">
					<div className="mx-auto flex">
						<Image
							src="/ceo.webp"
							alt="whyUs"
							width={400}
							height={400}
							className="mx-auto my-auto"
						/>
					</div>
					<div className="flex flex-col gap-5 w-3/4 mx-auto">
						<h1 className="uppercase text-6xl font-bold tracking-tighter bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text">
							About Us
						</h1>
						<h2 className="uppercase text-3xl font-light tracking-tight">
							Kubeir Kamal, aka Kamal Lalwani, is the founder of Ask Kubeir
							Immigration
						</h2>
						<h3 className="font-extralight text-lg tracking-normal">
							A Regulated Canadian Immigration Consultant (RCIC) licensed under
							the Immigration Consultants of Canada Regulatory Council (ICCRC)
							with license number R706180, he is also a member of The Canadian
							Association of Professional Immigration Consultants (CAPIC) member
							ID R21006. He is the driving force and the face of Ask Kubeir. An
							ardent believer who is Forever Hopeful, his commitment, passion
							and transparency towards his work is what his clients and audience
							seek.
						</h3>
						<h3 className="font-extralight text-lg tracking-normal">
							certificate of recognition:
						</h3>
						<div className="flex flex-row gap-5">
							<Link
								href="/"
								className="text-6xl hover:scale-105 transition-all duration-100"
							>
								<GiLaurelsTrophy />
							</Link>
							<Link
								href=""
								className="text-6xl hover:scale-105 transition-all duration-100"
							>
								<GiLaurelsTrophy />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default AboutUs;
