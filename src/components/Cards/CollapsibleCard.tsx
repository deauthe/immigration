"use client";
import React from "react";

type Props = {
	title: string;
	subHeading?: string;
	body: React.ReactNode;
};

const CollapsibleCard = ({ title, subHeading, body }: Props) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="du-card du-card-body text-center h-fit w-full bg-primary text-primary-content ">
			<h2 className="du-card-title lg:text-3xl md:text-2xl sm:text-xl font-bold mx-auto">
				{title}
			</h2>
			{subHeading && (
				<p className="text-wrap text-xl md:text-lg text-md lg:px-20 md:px-10 px-5">
					{subHeading}
				</p>
			)}

			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					isOpen ? "max-h-96" : "max-h-0"
				}`}
			>
				{body}
			</div>

			<button
				className="du-btn du-btn-outline du-btn-md rounded-full max-w-44 mx-auto text-primary-content border-primary-content"
				onClick={() => toggle()}
			>
				{isOpen ? " ^ " : "Read More ..."}
			</button>
		</div>
	);
};

export default CollapsibleCard;
