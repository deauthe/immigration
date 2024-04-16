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

const data: MenuItem[] = [
	{
		id: 1,
		name: "About US",
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
		name: "Migrate",
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

const Menu: React.FC<MenuProps> = ({ showMenu, setShowMenu }) => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{data.map((item, index) => {
					return (
						<div key={index}>
							<NavigationMenuItem>
								<NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
								<NavigationMenuContent
									key={index}
									className="bg-red-400 flex flex-col w-96 "
								>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1000px] ">
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
								</NavigationMenuContent>
							</NavigationMenuItem>
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
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
