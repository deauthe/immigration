import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconFileBroken, IconSignature, IconCheck } from "@tabler/icons-react";

type Props = {};

const Advantages = (props: Props) => {
	return (
		<BentoGrid className="max-w-6xl mx-auto md:auto-rows-[16rem]">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					className={item.className}
					icon={item.icon}
				/>
			))}
		</BentoGrid>
	);
};

export default Advantages;

const items = [
	{
		title: "Faster Processing times",
		description: `applicants who apply with required documentation may receive
an invitation to permanent residence within 6 months of the application.`,
		className: "md:row-span-2",
		icon: <IconCheck className="h-8 w-8 text-success shrink-0" />,
	},

	{
		title: "Flexibility of location",
		description: ` Candidates who receive an invitation for permanent residence are
able to live in any province or territory in Canada they desire.`,
		className: "md:col-span-1",
		icon: <IconCheck className="h-8 w-8 text-success shrink-0" />,
	},
	{
		title: "Pathway to Citizenship",
		description: `If you obtain an invitation to permanent residence, you are
eligible to apply for Canadian citizenship after a period of a few years.`,
		className: "md:row-span-2",
		icon: <IconCheck className="h-8 w-8 text-success" />,
	},
	{
		title: "Increased chance of selection",
		description: ` skilled candidates who desire permanent residence have
a higher chance of receiving an invitation when applying through Express Entry.`,
		className: "md:col-span-1",
		icon: <IconCheck className="h-8 w-8 text-success" />,
	},
];
