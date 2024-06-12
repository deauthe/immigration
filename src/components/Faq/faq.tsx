import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqItems } from "./FaqStaticItems";

const FaqSection = () => {
	return (
		<div
			className="du-hero h-fit bg-gradient-to-tl from-red-900/80 to-white w-full flex flex-col py-5 rounded-none "
			style={{ backgroundImage: "url(/toronto.jpg)" }}
		>
			<div className="mx-auto mb-2 ">
				<h1 className="lg:text-9xl md:text-7xl text-4xl tracking-tighter bg-gradient-to-l from-red-600 to-primary-content stroke-black  text-transparent box-content font-oswald font-bold mx-auto bg-clip-text  lg:px-2">
					FAQs
				</h1>
			</div>
			<div className="  lg:grid lg:grid-cols-4 gap-5 lg:px-20 rounded-lg lg:mt-10 mt-3 lg:mx-20 mx-5 justify-center items-center font-DmSerif ">
				<div className="col-span-2 mb-5 lg:mb-0 ">
					<h1 className="lg:text-7xl md:text-6xl text-5xl md:text-left text-center tracking-tight font-bold uppercase font-oswald mx-auto  w-fit">
						Got a question?
					</h1>
				</div>
				<div className="col-span-2 lg:px-5 md:px-2 px-1 du-glass  bg-black/80 py-10 rounded-lg  shadow-md mx-auto md:mx-10 lg:w-full">
					<div className="du-join du-join-vertical prose text-primary-content">
						{FaqItems.map((item, index) => {
							return (
								<div
									key={index}
									className="du-collapse du-collapse-arrow du-join-item du-border du-border-base-300"
								>
									<input type="radio" name="my-accordion-3" checked={true} />
									<div className="du-collapse-title text-xl font-medium ">
										{item.heading}
									</div>
									<div className="du-collapse-content">
										<p>{item.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
