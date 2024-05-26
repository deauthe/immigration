import Link from "next/link";
import React from "react";

type SideBarLink = {
	title: string;
	url: string;
};

type SideBarSection = {
	title: string;
	links: SideBarLink[];
};

type Props = {
	sections: SideBarSection[];
};

const SideBarLinks = (props: Props) => {
	const { sections } = props;
	return (
		<div className="w-[500px] flex flex-col gap-5 mt-10">
			{sections.map((item, index) => {
				return (
					<div key={index} className="flex flex-col gap-1">
						<h1 className="mx-auto w-fit uppercase font-bold">{item.title}</h1>
						<hr className="text-black bg-black" />
						<div className="flex flex-col gap-2">
							{item.links?.map((link, index) => {
								return (
									<Link
										key={index}
										className="px-4 py-1 rounded-lg hover:bg-red-600 hover:text-white text-black font-normal tracking-tight mx-auto transition-all duration-100 "
										href={link.url}
									>
										{link.title}
									</Link>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SideBarLinks;
