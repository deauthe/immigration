export type FaqItemTypes = {
	id: number;
	heading: string;
	description: string;
};

export const FaqItems: FaqItemTypes[] = [
	{
		id: 1,
		heading: "Is making community free on edLern?",
		description:
			" It can be either way, as it ultimately depends on the creator's preference whether they want their community to be free or premium.",
	},
	{
		id: 4,
		heading: "Is joining community free on edLern?",
		description:
			"It depends upon the community creator. If its free, you can join it for free and for the  premium you have to pay the monthly subscription.",
	},
	{
		id: 2,
		heading: "How can I earn money on edLern?",
		description:
			"Create a community, engage the audience with premium content and make recurring revenue every month.",
	},
	{
		id: 3,
		heading: "When the edLern is fully launching?",
		description:
			"We will be launching soon. Please sign up and stay updated with recent news and launch date.",
	},
];

interface NavLinkType {
	name: string;
	href: string;
}
export const navBarNavLinks: NavLinkType[] = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about-us" },
	{ name: "study", href: "/study" },
];
export const footerNavLinks: NavLinkType[] = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about-us" },
	{ name: "Contact", href: "/contact" },
	{ name: "study", href: "/study" },
	{ name: "express entry", href: "/express-entry" },
	{ name: "vacation", href: "/vacation" },
	{ name: "our team", href: "/team" },
	{ name: "work", href: "/work" },
	{ name: "faq", href: "/faq" },
	{ name: "privacy policy", href: "/privacy-policy" },
	{ name: "terms and conditions", href: "/terms-and-conditions" },
];
