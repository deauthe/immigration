import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { migrateFaqItems } from "./staticMigrateFaqs";

const MigrateFaqSection = () => {
	return (
		<div className="h-fit  rounded-lg w-full flex flex-col py-5 ">
			<div className="  lg:grid lg:grid-cols-4 gap-5 lg:px-20 rounded-lg lg:mt-10 mt-3 lg:mx-20 mx-5 justify-center items-center font-DmSerif ">
				<div className="col-span-2 mb-5 lg:mb-0 ">
					<h1 className="lg:text-7xl md:text-6xl text-5xl md:text-left text-center tracking-tight font-bold uppercase font-oswald mx-auto  w-fit">
						Got a question?
					</h1>
				</div>
				<div className="col-span-2 lg:px-5 md:px-2 px-1 bg-gradient-to-r from-black to-red-600 text-white/[0.8] hover:text-white py-10 rounded-lg  shadow-md mx-auto md:mx-10 lg:w-full">
					<Accordion type="single" collapsible>
						{migrateFaqItems.map((item, index) => {
							return (
								<AccordionItem value={`${item.id}`!} key={index}>
									<AccordionTrigger className="lg:text-xl md:text-xl text-lg lg:px-0 md:px-2 px-3 lg:font-semibold md:font-medium   font-normal hover:no-underline text-left">
										{item.heading}
									</AccordionTrigger>
									<AccordionContent className="text-md">
										{item.description}
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default MigrateFaqSection;
