import Image from "next/image";
import React from "react";

export type CarouselCardProps = {
	title: string;
	subheading?: string;
	overflowImageUrl: string;
	body?: React.ReactNode;
};

const CarouselCard = (props: CarouselCardProps) => {
	return (
		<div className="relative w-max-96 du-card overflow-visible  md:mt-[80px] h-96 bg-primary  ">
			<div className="absolute lg:-top-20 -top-10 left-[50%] transform translate-x-[-50%] lg:size-16 md:size-10 size-10 z-20 overflow-visible  ">
				<Image src={props.overflowImageUrl} width={200} height={200} alt="" />
			</div>
			<div className="du-card-body text-primary-content">
				<h2 className="du-card-title mx-auto text-primary-content">
					{props.title}
				</h2>
				<p className="text-sm text-primary-content/90">{props.subheading}</p>
				{props.body}
			</div>
			<div className="text-xs text-primary-content/80 absolute bottom-2 right-2">
				{"scroll ->"}
			</div>
		</div>
	);
};

export default CarouselCard;
