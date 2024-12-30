"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { usePathname } from "next/navigation";
import LoginButton from "../LoginButton";
import Image from "next/image";

const Navbar = () => {
	const [show, setShow] = useState<boolean>(false);

	const pathName = usePathname();

	const controlNavbar = () => {
		if (window.scrollY >= 40) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		if (pathName.includes("/dashboard")) {
			setShow(true);
		} else {
			window.addEventListener("scroll", controlNavbar);
		}

		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [pathName]);

	return (
		<div
			className={` w-full h-[50px] items-center md:h-[80px]  z-50 fixed  top-0 transition-all duration-500  md:px-5 px-1    `}
		>
			{/* <div
    className={`bg-red-w-full flex justify-between`}
  > */}
			<div
				className={` relative ${
					show
						? "bg-primary mt-2 text-primary-content border-primary-content border-[1px] rounded-full "
						: "bg-transparent mt-1 text-primary-content border-b-[1px] border-primary-content border-opacity-40 "
				} items-center w-full flex justify-between transition-all duration-500 md:px-5 px-2 py-1`}
			>
				<div className="flex gap-2 items-center ml-2">
					<Link href="/">
						<div className=" flex items-center w-fit h-full gap-2 ">
							{/* <Image
								src="/images/logo.png"
								alt="logo"
								width={300}
								height={300}
								className="h-full w-32 drop-shadow-lg text-primary-content stroke-primary-foreground"
							/> */}
							<div className="text-primary-content text-2xl font-extralight">
								BMOR Immigration And Visa Services
							</div>
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
