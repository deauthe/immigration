import Image from "next/image";
import Link from "next/link";
import React from "react";

export type HomeCardProps = {
	title: string;
	description: string;
	image: string;
	link?: {
		title: string;
		url: string;
	};
	subText?: string;
};

export default function HomeCard({
	image,
	description,
	title,
	link,
	subText,
}: HomeCardProps) {
	return (
		<div className="du-card md:du-card-side du-card-compact bg-base-100 shadow-xl rounded-sm  mx-auto max-h-96 ">
			<figure>
				<img src={image} alt="Movie" className="object-fill h-full" />
			</figure>
			<div className="du-card-body md:text-left text-center">
				<h2 className="du-card-title md:text-left text-center text-lg lg:text-2xl md:text-xl uppercase">
					{title}
				</h2>
				<span className="lg:text-xl md:text-lg text-md">{description}</span>
				{subText && <p className="text-sm text-muted">{subText}</p>}

				{link && (
					<div className="du-card-actions md:justify-start justify-center">
						<Link
							href={link?.title}
							className="du-btn md:du-btn-md du-btn-sm du-btn-primary rounded-full"
						>
							{link?.title}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
