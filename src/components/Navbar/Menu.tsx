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
		url: "about-us",
	},

	{
		id: 1,
		name: "Work",
		url: "work",
	},
	{
		id: 1,
		name: "Study",
		url: "study",
	},
	{
		id: 1,
		name: "Visit",
		url: "visit",
	},
	{
		id: 1,
		name: "express entry",
		url: "express-entry",
	},
];

const Menu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex flex-row gap-3 ">
				{navMenuData.map((item, index) => {
					return (
						<div key={index} className="du-dropdown du-dropdown-hover ">
							<Link
								href={item?.url || "/"}
								className="uppercase font-light bg-transparent mx-1  hover:cursor-pointer hover:scale-105 hover:text-white transition-all duration-200 du-link-hover"
							>
								{item.name}
							</Link>
							{item.subMenu && (
								<ul
									tabIndex={0}
									className="du-dropdown-content z-[1] du-menu du-card-bordered p-2 shadow bg-primary/90  uppercase rounded-box w-52 "
								>
									{item.subMenu.map((item, index) => {
										return (
											<ListItem
												key={item.name}
												title={item.name}
												href={item.url || "/"}
											></ListItem>
										);
									})}
								</ul>
							)}
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
				<Link
					href={props.href || "/"}
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
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default Menu;
