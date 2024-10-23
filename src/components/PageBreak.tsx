import React from "react";

type Props = { label: string };

const PageBreak = (props: Props) => {
	return (
		<div className="lg:grid lg:grid-cols-4 flex justify-center lg:mx-20 md:mx-10 mx-5 gap-3">
			<hr className="my-auto bg-neutral/30 h-[2px] hidden lg:block" />

			<h1 className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-base-100/80 text-neutral font-bold tracking-tighter w-fit mx-auto text-nowrap col-span-2">
				{props.label}
			</h1>
			<hr className="my-auto bg-neutral/30 h-[2px] hidden lg:block" />
		</div>
	);
};

export default PageBreak;
