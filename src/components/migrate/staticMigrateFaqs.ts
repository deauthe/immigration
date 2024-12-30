export type FaqItemTypes = {
	id: number;
	heading: string;
	description: string;
};

export const migrateFaqItems: FaqItemTypes[] = [
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
