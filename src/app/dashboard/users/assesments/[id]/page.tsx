import { getUserAssesment } from "@/lib/actions/users";
import {
	FlagIcon,
	MailCheckIcon,
	PhoneCall,
	PhoneCallIcon,
	SchoolIcon,
	SpeakerIcon,
} from "lucide-react";
import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { GiFamilyTree, GiFrance } from "react-icons/gi";

async function UserAssesmentDisplayPage({
	params,
}: {
	params: { id: string };
}) {
	const assesmentId = params.id;
	const assesment = await getUserAssesment({ id: assesmentId });
	if (!assesment) return <div>Assesment not found</div>;
	return (
		<div className="flex flex-col gap-5 mt-20">
			<div className="uppercase font-bold text-2xl">
				{assesment.firstName + " " + assesment.lastName}
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						<MailCheckIcon />
					</div>

					{assesment.email}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						<PhoneCallIcon />
					</div>
					{assesment.mobileNo}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">{"age: "}</div>
					{assesment.age}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						{"children: "}
					</div>
					{assesment.childrenNo}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						<FlagIcon />
					</div>
					{assesment.country}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						<SchoolIcon />
					</div>
					{assesment.educationField}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						<SpeakerIcon />
					</div>
					{assesment.englishLevel}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						{"Family in canada"}
					</div>
					{assesment.familyInCanada}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						{"French Level"}
					</div>
					{assesment.frenchLevel}
				</div>
				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">{"ielts"}</div>
					{assesment.ieltsScore}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						<BiCommentDetail />
					</div>
					{assesment.comment}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						{"net worth: "}
					</div>
					{assesment.netWorth}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						{"assesment posted at: "}
					</div>
					{assesment.createdAt.toDateString()}
				</div>

				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						{"assesment updated at: "}
					</div>
					{assesment.updatedAt.toDateString()}
				</div>
				<div className="flex flex-row gap-3 p-2 rounded-e-box bg-primary-foreground/70 hover:bg-primary-foreground hover:font-semibold max-w-3xl min-w-max border-2 border-black transition-all duration-200 hover:cursor-pointer">
					<div className="border-r-[1px] pr-3 border-black/30 ">
						{"travel history: "}
					</div>
					{assesment.travelHistory}
				</div>
			</div>
		</div>
	);
}

export default UserAssesmentDisplayPage;
