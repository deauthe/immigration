import React, { ReactNode } from "react";

interface WrapperProps {
	children: ReactNode;
	className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
	return (
		<div
			className={`w-full max-w-screen lg:px-20 md:px-10 px-5 mx-auto lg:mt-10 md:mt-5 mt-3 ${
				className || ""
			}`}
		>
			{children}
		</div>
	);
};

export default Wrapper;
