import BasicTemplateTopCard, {
	BasicTemplateTopCardProps,
} from "@/components/Cards/BasicTemplateTopCard";
import BasicTemplate from "@/components/Templates/BasicTemplate";
import React from "react";
import QuestionFormContent from "./QuestionForm";
import { Button } from "@/components/ui/moving-border";

type Props = {};

const topCardProps: BasicTemplateTopCardProps = {
	title: "Contact Us",
	description: `Please let us know if you have any queries or questions about our services. We would be
delighted in helping you find your path to success, and offer personalized advice through phone
and email.`,
	image: { src: "/images/contact.png", width: 420, height: 420 },
	button2: {
		title: "Contact Us",
		action: async () => {
			"use server";
			return;
		},
	},
};

const ContactPage = (props: Props) => {
	return (
		<BasicTemplate worldMapBackground={false} className="">
			<BasicTemplateTopCard {...topCardProps} />

			<div className="flex flex-col gap-3 md:gap-5 lg:gap-8 items-center text-center z-10">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary md:text-primary-content uppercase tracking-tight">
					Contact BMOR Immigration
				</h1>
				<div className="w-full md:w-5/6 bg-white border-[1px] border-neutral-200 p-4 rounded-2xl shadow-lg hover:drop-shadow-lg hover:bg-grid-primary/5 transition-all duration-300">
					<div className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
						Ask A Question
					</div>
					<QuestionFormContent />
				</div>
			</div>
		</BasicTemplate>
	);
};

export default ContactPage;
