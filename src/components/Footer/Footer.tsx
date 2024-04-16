import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "../mainComponents/Wrapper";

const Footer = () => {
	return (
		<footer className="bg-black text-white  pb-3">
			<Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0 pt-10">
				<div className="flex-col flex gap-5">
					<div>
						<div className="font-heading1 text-5xl">Immigration</div>
					</div>
					<div className="size-64 bg-red-300 rounded-lg"></div>
					<div className="flex flex-col gap-4 justify-center md:justify-start md:flex-row">
						<a
							href="https://facebook.com"
							className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
						>
							<FaFacebookF size={20} />
						</a>
						<Link
							href="https://twitter.com"
							className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
						>
							<FaTwitter size={20} />
						</Link>
						<div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
							<FaYoutube size={20} />
						</div>
						<div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
							<FaInstagram size={20} />
						</div>
					</div>
				</div>
				{/* LEFT START */}
				<div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row  mx-auto justify-between ">
					{/* MENU START */}
					<div className="flex flex-col gap-3 shrink-0 font-heading1 text-lg bg-red-500  w-5/12 mx-auto">
						<div className="text-white/[0.5] hover:text-white  cursor-pointer ">
							About Us
						</div>
						<div className="text-white/[0.5] hover:text-white cursor-pointer">
							Contact Us
						</div>
						<div className="text-white/[0.5] hover:text-white  cursor-pointer">
							Immigaration Faq
						</div>
						<div className="text-white/[0.5] hover:text-white  cursor-pointer">
							Affiliates
						</div>
						<div className="text-white/[0.5] hover:text-white cursor-pointer">
							About Us
						</div>
					</div>
					{/* MENU END */}

					{/* NORMAL MENU START */}
					<div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0 font-heading1  justify-center w-5/12 bg-red-500">
						{/* MENU START */}
						<div className="flex flex-col gap-3 text-lg ">
							<div className=" text-white/[0.5] hover:text-white cursor-pointer">
								Service
							</div>
							<div className=" text-white/[0.5] hover:text-white cursor-pointer">
								NewsRoom
							</div>
							<div className=" text-white/[0.5] hover:text-white cursor-pointer">
								Community
							</div>
							<div className=" text-white/[0.5] hover:text-white cursor-pointer">
								Disclaimer
							</div>
						</div>
						{/* MENU END */}

						{/* MENU START */}
						<div className="flex flex-col gap-3 text-lg font-heading1  w-2/12">
							<div className="font-oswald font-medium uppercase ">Canada</div>
							<div className="text-sm text-white/[0.5] hover:text-white  text-wrap ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
								dolores quae, iste animi et itaque sunt vel veritatis explicabo
								voluptatibus.
							</div>
							<div className="text-sm text-white/[0.5] hover:text-white  text-wrap ">
								+01 823838 838383
							</div>
						</div>
						{/* MENU END */}
					</div>
					{/* NORMAL MENU END */}
				</div>
				{/* LEFT END */}

				{/* RIGHT START */}

				{/* RIGHT END */}
			</Wrapper>
			<Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
				{/* LEFT START */}
				<div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
					© 2023 Eye Tee, Inc. All Rights Reserved
				</div>
				{/* LEFT END */}

				{/* RIGHT START */}
				<div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
					<div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
						Guides
					</div>
					<div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
						Terms of Sale
					</div>
					<div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
						Terms of Use
					</div>
					<div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
						Privacy Policy
					</div>
				</div>
				{/* RIGHT END */}
			</Wrapper>
		</footer>
	);
};

export default Footer;
