import {
	HoverEffect,
	HoverEffectCardProps,
} from "@/components/Cards/HoverCard";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export function StaticPillarCards() {
	return (
		<div className="max-w-8xl mx-auto px-8 text-primary-content">
			<HoverEffect items={staticCardInfo} className="lg:grid-cols-2" />
		</div>
	);
}

const staticCardInfo: HoverEffectCardProps[] = [
	{
		title: <VscWorkspaceTrusted />,
		subheading: "Humanism",
		body: (
			<div className="flex flex-col gap-1">
				<p>
					{`There’s no cookie-cutter client. Each individual is different, with a unique story and path in life.
That’s why our consultants will use their immigration expertise to find the best solution for YOU.`}
				</p>
			</div>
		),
	},
	{
		title: <VscWorkspaceTrusted />,
		subheading: "Ethics",
		body: (
			<div className="flex flex-col gap-1">
				<p>
					{`Immigration is not simply business. It is the key to the dreams and hopes of many people,
including you. We respect this, and are committed to help you fulfill your dreams.`}
				</p>
			</div>
		),
	},
	{
		title: <VscWorkspaceTrusted />,
		subheading: "Responsibility:",
		body: (
			<div className="flex flex-col gap-1">
				<p>
					{`The world of immigration is ever-changing, and our consultants are highly skilled with providing
the most up-to-date information on laws and trends. This ensures that your application is as
precise as possible.`}
				</p>
			</div>
		),
	},
	{
		title: <VscWorkspaceTrusted />,
		subheading: "Reliability",
		body: (
			<div className="flex flex-col gap-1">
				<p>
					{
						"We value our relationships with our clients. That’s why we aim to create the best possible experience for you during our consultations. You can rest assured that we at BMOR will be here to support you every step of the way, and ensure you reach your goals, "
					}
				</p>
			</div>
		),
	},
];
