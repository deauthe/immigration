import { cn } from "@/lib/utils";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[10rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	icon,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	icon?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"border-[1px] bg-black row-span-1 rounded-xl  group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2]  justify-between flex flex-col space-y-4 ",
				className
			)}
		>
			<div className="group-hover/bento:translate-x-2 transition-all duration-200 bg-dot-primary-foreground/20 hover:bg-dot-primary  justify-center items-center h-full w-full">
				<div className="mx-auto">{icon}</div>

				<div className="font-sans font-bold text-primary-content lg:text-xl  mb-2 mt-2">
					{title}
				</div>
				<div className="font-sans font-normal text-primary-content/90 lg:text-lg">
					{description}
				</div>
			</div>
		</div>
	);
};
