"use client";
import React, { useState } from "react";
import { navMenuData } from "./Menu";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import LoginButton from "../LoginButton";

type Props = {};

const MenuMobile = (props: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Sheet onOpenChange={(e) => setIsOpen(e)}>
			<SheetTrigger asChild>
				{isOpen ? (
					<VscChromeClose
						className="text-[16px] text-primary-content"
						onClick={() => setIsOpen(!isOpen)}
					/>
				) : (
					<BiMenuAltRight
						className="text-[20px] text-primary-content"
						onClick={() => setIsOpen(!isOpen)}
					/>
				)}
			</SheetTrigger>
			<SheetContent className="bg-primary text-primary-content border-none rounded-l-lg ">
				<SheetHeader>
					<SheetTitle className="text-white font-extrabold text-3xl">
						BMOR
					</SheetTitle>
				</SheetHeader>
				{/* daisy ui magic for nested list  */}
				<ul className="du-menu bg-transparent w-full du-rounded-box active:du-glass prose-md uppercase text-md gap-2">
					{navMenuData.map((item, index) =>
						item?.subMenu ? (
							<li key={index}>
								<details>
									<summary>{item.name}</summary>
									<ul>
										{item.subMenu.map((sublink, subIndex) => (
											<li key={subIndex}>
												<Link href={sublink.url as string}>{sublink.name}</Link>
											</li>
										))}
									</ul>
								</details>
							</li>
						) : (
							<li key={index}>
								<Link
									href={item.url as string}
									className="du-link du-link-hover"
								>
									{item.name}
								</Link>
							</li>
						)
					)}
					<LoginButton />
				</ul>

				{/* end of nested lists  */}
				<SheetFooter>
					<aside>
						<p className="text-muted-foreground">
							Copyright © 2024 - All right reserved by BMOR
						</p>
					</aside>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default MenuMobile;
