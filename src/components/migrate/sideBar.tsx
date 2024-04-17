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
		<div className="w-full flex flex-col gap-10">
			{sections.map((item, index) => {
				return (
					<div key={index} className="flex flex-col gap-5">
						<h1>{item.title}</h1>
						<div className="flex flex-col gap-2">
							{item.links?.map((link, index) => {
								return (
									<Link key={index} className="" href={link.url}>
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
