"use client";
import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface MenuItem {
	id: number;
	name: string;
	subMenu?: MenuItem[];
	url?: string;
}

interface MenuProps {
	showMenu: boolean;
	setShowMenu: (show: boolean) => void;
}

export const navMenuData: MenuItem[] = [
	{
		id: 1,
		name: "About US",
		url: "/#AboutUs",
		subMenu: [
			{ id: 1, name: "about us", url: "/#AboutUs" },
			{ id: 2, name: "Teams", url: "/" },
			{ id: 3, name: "Faqs", url: "/" },
			{ id: 4, name: "why us", url: "/" },
			{ id: 5, name: "Career", url: "/" },
		],
	},
	{
		id: 1,
		name: "Migrate",
		url: "/",
		subMenu: [
			{ id: 1, name: "Express Entry", url: "/" },
			{ id: 2, name: "Family", url: "/" },
			{ id: 3, name: "Humanitarian and compassionatets", url: "/" },
			{ id: 4, name: "why us", url: "/" },
			{ id: 5, name: "Career", url: "/" },
		],
	},
	{
		id: 1,
		name: "Work",
		url: "/",
		subMenu: [
			{ id: 1, name: "about us", url: "/" },
			{ id: 2, name: "Teams", url: "/" },
			{ id: 3, name: "Faqs", url: "/" },
			{ id: 4, name: "why us", url: "/" },
			{ id: 5, name: "Career", url: "/" },
		],
	},
	{
		id: 1,
		name: "Study",
		url: "/",
		subMenu: [
			{ id: 1, name: "about us", url: "/" },
			{ id: 2, name: "Teams", url: "/" },
			{ id: 3, name: "Faqs", url: "/" },
			{ id: 4, name: "why us", url: "/" },
			{ id: 5, name: "Career", url: "/" },
		],
	},
	{
		id: 1,
		name: "Visit",
		url: "/",
		subMenu: [
			{ id: 1, name: "about us", url: "/" },
			{ id: 2, name: "Teams", url: "/" },
			{ id: 3, name: "Faqs", url: "/" },
			{ id: 4, name: "why us", url: "/" },
			{ id: 5, name: "Career", url: "/" },
		],
	},
	{
		id: 1,
		name: "Business",
		url: "/",
		subMenu: [
			{ id: 1, name: "about us", url: "/" },
			{ id: 2, name: "Teams", url: "/" },
			{ id: 3, name: "Faqs", url: "/" },
			{ id: 4, name: "why us", url: "/" },
			{ id: 5, name: "Career", url: "/" },
		],
	},
	{
		id: 1,
		name: "Services",
		url: "/",
		subMenu: [
			{ id: 1, name: "about us", url: "/" },
			{ id: 2, name: "Teams", url: "/" },
			{ id: 3, name: "Faqs", url: "/" },
			{ id: 4, name: "why us", url: "/" },
			{ id: 5, name: "Career", url: "/" },
		],
	},
	{
		id: 1,
		name: "News room",
		url: "/",
		subMenu: [
			{ id: 1, name: "about us", url: "/" },
			{ id: 2, name: "Teams", url: "/" },
			{ id: 3, name: "Faqs", url: "/" },
			{ id: 4, name: "why us", url: "/" },
			{ id: 5, name: "Career", url: "/" },
		],
	},
	{
		id: 1,
		name: "Community",
		url: "/",
		subMenu: [
			{ id: 1, name: "about us", url: "/" },
			{ id: 2, name: "Teams", url: "/" },
			{ id: 3, name: "Faqs", url: "/" },
			{ id: 4, name: "why us", url: "/" },
			{ id: 5, name: "Career", url: "/" },
		],
	},
];

const Menu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex flex-row gap-5">
				{navMenuData.map((item, index) => {
					return (
						<div key={index} className="du-dropdown du-dropdown-hover ">
							<div className="uppercase font-extralight bg-transparent mx-1 text-primary-content hover:cursor-pointer">
								{item.name}
							</div>
							<ul
								tabIndex={0}
								className="du-dropdown-content z-[1] du-menu du-card-bordered p-2 shadow bg-primary/90 text-primary-content uppercase rounded-box w-52 "
							>
								{item.subMenu &&
									item.subMenu.map((item, index) => {
										return (
											<ListItem
												key={item.name}
												title={item.name}
												href={item.url || "/"}
											></ListItem>
										);
									})}
							</ul>
						</div>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none du-bordered space-y-1 rounded-md items-center leading-none no-underline outline-none transition-colors hover:glass hover:text-accent-foreground focus:bg-primary focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default Menu;
