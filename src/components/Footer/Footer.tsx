import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "../mainComponents/Wrapper";

const Footer = () => {
	return (
		<footer className="bg-black text-white pb-3">
			<Wrapper className="flex mx-auto w-full max-w-screen-xl gap-8 py-10 flex-col md:flex-row items-start md:items-center justify-between">
				{/* Left Section */}
				<div className="flex flex-col gap-8">
					<div className="font-bold text-3xl bg-gradient-to-r from-white to-red-500 text-transparent bg-clip-text">
						Immigration
					</div>
					<div className="w-16 h-16  rounded-full"></div>
					<div className="flex gap-4">
						<Link
							href="https://facebook.com"
							className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
						>
							<FaFacebookF size={20} />
						</Link>
						<Link href="https://twitter.com">
							<div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
								<FaTwitter size={20} />
							</div>
						</Link>
						<div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
							<FaYoutube size={20} />
						</div>
						<div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
							<FaInstagram size={20} />
						</div>
					</div>
				</div>

				{/* Middle Section */}
				<div className="flex flex-col gap-8">
					<div className="text-lg font-bold">Menu</div>
					<div className="flex flex-col gap-3">
						<Link href="/">
							<div className="text-gray-500 hover:text-white">About Us</div>
						</Link>
						<Link href="/">
							<div className="text-gray-500 hover:text-white">Contact Us</div>
						</Link>
						{/* Add more menu items as needed */}
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<div className="text-lg font-bold  bg-gradient-to-r from-white to-red-500 text-transparent bg-clip-text">
						Menu
					</div>
					<div className="flex flex-col gap-3">
						<Link href="/">
							<div className="text-gray-500 hover:text-white">About Us</div>
						</Link>
						<Link href="/">
							<div className="text-gray-500 hover:text-white">Contact Us</div>
						</Link>
						{/* Add more menu items as needed */}
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<div className="text-lg font-bold  bg-gradient-to-r from-white to-red-500 text-transparent bg-clip-text">
						Menu
					</div>
					<div className="flex flex-col gap-3">
						<Link href="/">
							<div className="text-gray-500 hover:text-white">About Us</div>
						</Link>
						<Link href="/">
							<div className="text-gray-500 hover:text-white">Contact Us</div>
						</Link>
						{/* Add more menu items as needed */}
					</div>
				</div>

				{/* Right Section */}
				<div className="flex flex-col gap-8">
					<div className="text-lg font-bold  bg-gradient-to-r from-white to-red-500 text-transparent bg-clip-text">
						Service
					</div>
					<div className="flex flex-col gap-3">
						<Link href="/">
							<div className="text-gray-500 hover:text-white">Guides</div>
						</Link>
						<Link href="/">
							<div className="text-gray-500 hover:text-white">
								Terms of Sale
							</div>
						</Link>
						{/* Add more service items as needed */}
					</div>
				</div>
			</Wrapper>

			{/* Copyright Section */}
			<Wrapper className="flex justify-between mt-10 items-center text-sm text-gray-500">
				<div>&copy; 2024 Immigration, Inc. All Rights Reserved</div>
				{/* Add additional content on the right side if needed */}
			</Wrapper>
		</footer>
	);
};

export default Footer;
