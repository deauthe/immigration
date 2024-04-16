import Link from "next/link";
import React from "react";

type Props = {};

const ContactUs = (props: Props) => {
	return (
		<div className="mx-auto bg-gradient-to-tr from-black to-red-600 h-fit w-full p-10">
			<div className="grid grid-cols-4">
				<div className="col-span-3 flex flex-col gap-5">
					<h1 className="text-3xl font-extralight text-white/[0.6]">
						Looking For A
					</h1>
					<h1 className="text-6xl font-extrabold text-white/[0.9] ">
						Licensed Canadian Immigration Consultant?
					</h1>
					<h3 className="text-2xl text-white/[0.7] font-extralight">
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
