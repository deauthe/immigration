import SideBarLinks from "@/components/migrate/sideBar";
import type { Metadata } from "next";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<div className={`$ pt-20 grid grid-cols-12`}>
				<div className="col-span-3 bg-red-400">
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
				<div className="col-span-9 flex flex-col gap-10 bg-green-500">
					{children}
				</div>
			</div>
		</html>
	);
}
