import React from "react";

type Props = {};

function PrivacyPolicy({}: Props) {
	return (
		<div className="flex flex-col lg:gap-10 gap-5 ">
			<div className="text-2xl md:text-3xl lg:text-4xl w-fit text-center mx-auto uppercase font-semibold">
				Privacy Note
			</div>
			<div className="flex flex-col gap-2 lg:gap-5 md:w-2/3 w-full lg:w-1/2 text-center mx-auto px-5 md:px-0 sm:max-w-sm">
				<p className="text-sm md:text-md">
					The personal information you provide in this form is collected for the
					sole purpose of assessing your pathways to immigrate to Canada.
				</p>
			</div>
		</div>
	);
}

export default PrivacyPolicy;
