"use client";
import React, { useState, useEffect, useCallback } from "react";
import Wrapper from "@/components/mainComponents/Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

import { useRouter } from "next/navigation";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
	const [show, setShow] = useState<string>("translate-y-0");
	const [lastScrollY, setLastScrollY] = useState<number>(0);
	const [textColor, setTextColor] = useState<string>("text-black");

	const router = useRouter();

	const controlNavbar = () => {
		if (window.scrollY >= 150) {
			setShow("bg-black");
			setTextColor("text-white");
		} else {
			setShow("bg-transparent");
			setTextColor("text-black");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY]);

	return (
		<div
			className={`w-full h-[50px] md:h-[80px]  flex justify-between  z-20 fixed bg-white top-0 transition-all duration-500  px-5    `}
		>
			{/* <div
    className={`bg-red-w-full flex justify-between`}
  > */}
			<div className="flex gap-2 items-center ml-5 ">
				<Link href="/">
					<div className=" flex items-end gap-2 ">
						{/* <img
							src="/logo.png"
							alt="logo"
							className="w-[40px] md:w-[50px] drop-shadow-lg"
						/> */}
						<p className="md:text-3xl text-xl font-light font-heading1">
							Immigration
						</p>
					</div>
				</Link>
			</div>
			<div className="flex gap-2 items-center">
				<Menu showMenu={showCatMenu} setShowMenu={setShowCatMenu} />
			</div>

			{mobileMenu && (
				<div>
					<MenuMobile
						showCatMenu={showCatMenu}
						setShowCatMenu={setShowCatMenu}
						setMobileMenu={setMobileMenu}
					/>
				</div>
			)}

			<div className="  flex items-center gap-2   ">
				{/* {Button } */}

				<Link
					className="text-white bg-gradient-to-r from-black to-red-600 p-4 rounded-full hover:scale-105 transition-all duration-100"
					href={"/"}
				>
					<span
						className={` font-bold  active:scale-105 duration-300 transition-all  `}
					>
						Book your consultation
					</span>
				</Link>

				<div className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
					{mobileMenu ? (
						<VscChromeClose
							className="text-[16px]"
							onClick={() => setMobileMenu(!mobileMenu)}
						/>
					) : (
						<BiMenuAltRight
							className="text-[20px]"
							onClick={() => setMobileMenu(!mobileMenu)}
						/>
					)}
				</div>
				{/* Mobile icon end */}
			</div>

			{/* <ToastContainer /> */}
		</div>
	);
};

export default Navbar;
