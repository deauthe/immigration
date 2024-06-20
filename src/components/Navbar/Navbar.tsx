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
				className={` rounded-full relative ${
					show
						? "bg-primary mt-2 text-primary-content border-primary-content border-[1px]"
						: "bg-transparent mt-1 text-primary-content"
				} items-center w-full flex justify-between transition-all duration-500 md:px-5 px-2 py-1`}
			>
				<div className="flex gap-2 items-center ml-5">
					<Link href="/">
						<div className=" flex items-end gap-2 ">
							{/* <img
							src="/logo.png"
							alt="logo"
							className="w-[40px] md:w-[50px] drop-shadow-lg"
						/> */}
							<p className="md:text-3xl text-xl font-extrabold font-heading1 text-primary-content">
								BMOR
							</p>
						</div>
					</Link>
				</div>

				{/* menu start  */}

				<div
					className={`min-h-full px-3 rounded-full absolute mx-auto left-0 right-0 w-fit my-auto  flex-row  gap-2 items-center hidden lg:flex py-2  ${
						show ? " text-primary-content" : "text-primary-content"
					} `}
				>
					<Menu />
				</div>

				<div className="  flex items-center gap-2   ">
					{/* {Button } */}
					<Link
						className={`du-btn-sm du-btn  rounded-full hover:scale-105 du-btn-primary `}
						href={"/assesment-form"}
					>
						<span className={`font-normal uppercase my-auto`}>
							Free consultation
						</span>
					</Link>

					{/* mobile menu  */}
					<div className="lg:hidden block px-2">
						<MenuMobile />
					</div>
					{/* Mobile menu end */}
					<div
						className={`hidden lg:block ${
							show ? " text-primary-content" : " text-black"
						}`}
					>
						<LoginButton />{" "}
					</div>
				</div>

				{/* <ToastContainer /> */}
			</div>
		</div>
	);
};

export default Navbar;
