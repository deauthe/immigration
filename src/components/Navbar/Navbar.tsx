"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { usePathname } from "next/navigation";
import LoginButton from "../LoginButton";

const Navbar = () => {
	const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);
	const [lastScrollY, setLastScrollY] = useState<number>(0);
	const [textColor, setTextColor] = useState<string>("text-black");
	const [active, setActive] = useState<boolean>(true);

	const pathName = usePathname();

	const controlNavbar = () => {
		if (window.scrollY >= 40) {
			setShow(true);
			setTextColor("text-white");
		} else {
			setShow(false);
			setTextColor("text-black");
		}
	};

	useEffect(() => {
		if (pathName.includes("assesment-form")) {
			setActive(false);
		} else {
			setActive(true);
		}
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY, pathName]);

	return (
		<div
			className={` w-full h-[50px] items-center md:h-[80px]  z-20 fixed  top-0 transition-all duration-500  md:px-5 px-1    `}
		>
			{/* <div
    className={`bg-red-w-full flex justify-between`}
  > */}
			<div
				className={` py-2 rounded-full ${
					show ? "bg-primary mt-2" : "bg-transparent mt-1"
				} items-center  flex justify-between transition-all duration-500 md:px-5 px-2 `}
			>
				<div className="flex gap-2 items-center ml-5 ">
					<Link href="/">
						<div className=" flex items-end gap-2 ">
							{/* <img
							src="/logo.png"
							alt="logo"
							className="w-[40px] md:w-[50px] drop-shadow-lg"
						/> */}
							<p className="md:text-3xl text-xl font-extrabold text-primary-content font-heading1 ">
								BMOR
							</p>
						</div>
					</Link>
				</div>
				<div className=" gap-2 items-center hidden lg:flex">
					<Menu />
				</div>

				<div className="  flex items-center gap-2   ">
					{/* {Button } */}
					<Link
						className={`du-btn  rounded-full hover:scale-105 text-primary-content  ${
							show
								? "bg-transparent glass  hover:text-black"
								: "du-btn-primary border-primary-content/80"
						} `}
						href={"/assesment-form"}
					>
						<span className={`font-extralight uppercase`}>
							Free consultation
						</span>
					</Link>
					<div className="hidden lg:block">
						<LoginButton />{" "}
					</div>
					{/* mobile menu  */}
					<div className="lg:hidden block px-2">
						<MenuMobile />
					</div>
					{/* Mobile menu end */}
				</div>

				{/* <ToastContainer /> */}
			</div>
		</div>
	);
};

export default Navbar;
