import SideBarLinks from "@/components/migrate/sideBar";
import React from "react";

type Props = {};

const page = (props: Props) => {
	return (
		<div>
			<SideBarLinks
				sections={[
					{
						links: [
							{ title: "visit visa application", url: "/visa-application" },
							{ title: "visit visa application", url: "/visa-application" },
							{ title: "visit visa application", url: "/visa-application" },
						],
						title: "migrate",
					},
					{
						links: [
							{ title: "visit visa application", url: "/visa-application" },
							{ title: "visit visa application", url: "/visa-application" },
							{ title: "visit visa application", url: "/visa-application" },
							{ title: "visit visa application", url: "/visa-application" },
						],
						title: "migrate",
					},
				]}
			/>
		</div>
	);
};

export default page;
