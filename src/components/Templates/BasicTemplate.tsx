import { cn } from "@/lib/utils";
import React from "react";
import WorldMapBackground from "../mainComponents/WorldMapBackground";

function BasicTemplate({
	children,
	className,
	worldMapBackground,
}: {
	children: React.ReactNode;
	className?: string;
	worldMapBackground: boolean;
}) {
	return (
		<div
			className={cn(
				"py-16 mx-auto items-center flex  flex-col  gap-0 bg-transparent relative",
				className
			)}
		>
			<div className="bg-gradient-to-b from-primary to-secondary absolute w-screen xl:h-[800px] lg:h-[700px] md:h-[700px] h-[500px] top-0 md:rounded-b-[20%] z-10"></div>
			{worldMapBackground && (
				<div className="inset-0 ">
					<WorldMapBackground />
				</div>
			)}
			{children}
		</div>
	);
}

export default BasicTemplate;
