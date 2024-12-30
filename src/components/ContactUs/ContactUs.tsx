import Link from "next/link";
import React from "react";

type Props = {};

const ContactUs = (props: Props) => {
	return (
		<div className="mx-auto bg-primary h-fit w-full p-10">
			<div className="md:grid md:grid-cols-4 flex flex-col gap-5 text-center md:text-left">
				<div className="col-span-3 flex flex-col gap-5">
					<h1 className="text-3xl font-extralight text-white/[0.6]">
						Looking For A
					</h1>
					<h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold text-white/[0.9] ">
						Licensed Canadian Immigration Consultant?
					</h1>
					<h3 className="md:text-2xl text-lg text-white/[0.7] font-extralight">
						Mail Us At immigration@immigration.com
					</h3>
				</div>
				<div className="col-span-1 flex">
					<div className="mx-auto my-auto">
						<Link
							href="/"
							className=" bg-white p-4 rounded-full font-bold tracking-tighter shadow-md"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
