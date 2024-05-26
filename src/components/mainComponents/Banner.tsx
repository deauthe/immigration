import Image from "next/image";
import React from "react";

type Props = {
	image: string;
	heading: string;
	description: string;
};

const Banner = (props: Props) => {
	return (
		<div className="px-10 flex flex-row justify-between">
			<div className="flex flex-col gap-5 text-center my-auto h-fit">
				<h1 className="text-3xl font-extralight mx-auto w-fit">
					{props.heading}
				</h1>
				<h1 className="text-7xl font-bold w-1/2 text-wrap mx-auto w-fit">
					{props.description}
				</h1>
			</div>
			<div className="my-auto h-fit w-fit mx-auto">
				<Image src={props.image} alt={"banner"} width={300} height={300} />
			</div>
		</div>
	);
};

export default Banner;
