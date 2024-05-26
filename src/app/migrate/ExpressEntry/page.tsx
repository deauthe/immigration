import Banner from "@/components/mainComponents/Banner";
import MigrateFaqSection from "@/components/migrate/migrateFaqs";
import SideBarLinks from "@/components/migrate/sideBar";
import { Sidebar } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="flex flex-col">
			<div className="">
				<Banner
					heading="migrate to canada"
					description="move in with us "
					image="/expressentry.webp"
				/>
				<div className="bg-gradient-to-br from-black to-red-600 p-10 flex flex-row justify-between text-white">
					<div className="flex flex-col gap-5 ">
						<h1 className="text-lg font-extralight">Immigration</h1>
						<h1 className="text-3xl font-bold">Express Entry</h1>
					</div>
					<div className="w-1/2 my-auto h-fit">
						<h3 className="font-light text-wrap w-full">
							Designed to select the most qualified candidates catering to
							Canada’s labor market, the Express Entry system provides the most
							promising, popular, and one of the fastest ways to Canadian
							Immigration.
						</h3>
					</div>
				</div>
			</div>
			<div className="flex flex-row ">
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
				<div className="flex flex-col gap-5 my-10">
					{/* main page start  */}
					<div className="flex flex-row justify-between w-full px-10 gap-5 my-5">
						<div className="w-[400px] h-full shadow-md rounded-md relative bg-green-400 overflow-hidden mx-auto my-auto">
							<Image
								alt="cover"
								src={"/expressentry2.webp"}
								fill
								className="w-full h-full"
								objectFit="cover"
							/>
						</div>
						<div className="flex flex-col gap-3 flex-grow-0 md:w-5/12 mx-auto">
							<div className="text-xl font-extralight">Immigration</div>
							<div className="text-4xl font-bold tracking-tight">
								What is Express Entry?
							</div>
							{/* description  */}
							<div className="">
								<div className="flex flex-col gap-2">
									<div className="text-xl font-normal tracking-normal">
										Canadian Permanent Residency is a dream for many, and
										Express Entry is one of the most promising and sought-after
										systems to make this dream a reality
									</div>
									<div className="text-xl font-normal tracking-normal">
										Immigration Consultants of Canada Regulatory Council (ICCRC)
										use an online points-based system – The Express Entry – to
										select top candidates keeping in view its near future
										economy and labor market needs. To be eligible under Express
										Entry, one must qualify for one of the three of Canada’s
										economic programs:
									</div>
									<ul className="text-lg flex flex-col gap-2 list-disc list-inside ">
										<li className="">Federal Skilled Worker Program (FSWP)</li>
										<li className="">Federal Skilled Trades Program (FSTP)</li>
										<li className="">Canadian Experience Class (CEC)</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<hr />

					{/* faq section  */}
					<MigrateFaqSection />
				</div>
			</div>
		</div>
	);
};

export default page;
