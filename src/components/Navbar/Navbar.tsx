"use client";
import React, { useState, useEffect, useCallback } from "react";
import Wrapper from "@/components/mainComponents/Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { CgProfile } from "react-icons/cg";
import { MdLabelImportant, MdLogout } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

import logo from "@/public/logo.png";

import Router, { useRouter } from "next/navigation";
import Image from "next/image";

interface Category {
	id: number;
	attributes: {
		slug: string;
		name: string;
		products: {
			data: any[]; // Update with the correct type
		};
	};
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
	const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
	const [show, setShow] = useState<string>("translate-y-0");
	const [lastScrollY, setLastScrollY] = useState<number>(0);
	const [textColor, setTextColor] = useState<string>("text-black");
	const [categories, setCategories] = useState<Category[] | null>(null);

	const router = useRouter();

	useEffect(() => {
		setCategories([
			{
				id: 1,
				attributes: {
					name: "T-Shirts",
					slug: "/",
					products: {
						data: [],
					},
				},
			},
			{
				id: 2,
				attributes: {
					name: "Hoodies",
					slug: "/",
					products: {
						data: [],
					},
				},
			},
		]);
	}, []);

	//TODO:
	// const { cartItems } = useSelector((state) => state.cart);

	const toggleDropdown = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	const handleMouseEvents = useCallback(() => {
		setIsHovered(!isHovered);
	}, [isHovered]);

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
						categories={(categories as Category[]) || undefined}
					/>
				</div>
			)}

			<div className="  flex items-center gap-2   ">
				{/* {Button } */}

				<Link className="text-black" href={"/"}>
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
