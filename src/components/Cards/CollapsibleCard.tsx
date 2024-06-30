import React from "react";

type Props = {
	title?: string;
	subHeading?: string;
	body: React.ReactNode;
};

const CollapsibleCard = ({ title, subHeading, body }: Props) => {
	return <div>CollapsibleCard</div>;
};

export default CollapsibleCard;
