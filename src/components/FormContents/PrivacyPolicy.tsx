import React from "react";

type Props = {};

function PrivacyPolicy({}: Props) {
	return (
		<div className="flex flex-col lg:gap-10 gap-5 ">
			<div className="text-2xl md:text-3xl lg:text-4xl w-fit text-center mx-auto uppercase font-semibold">
				Privacy Policy
			</div>
			<div className="flex flex-col gap-2 lg:gap-5 md:w-2/3 w-full lg:w-1/2 text-center mx-auto px-5 md:px-0">
				<p className="text-sm md:text-md">
					The personal information you provide to Manaimmigration on our FORM is
					collected with the exclusive purpose of assessing your options for
					immigration to Canada under several immigration programs and criteria.
				</p>
				<p className="text-sm md:text-md">
					You can consult our PRIVACY POLICY form for further details.
					Please contact us if you have difficulties filling out this form.
				</p>
				<p className="text-sm md:text-md">ManaTools to help with Immigration</p>
			</div>
		</div>
	);
}

export default PrivacyPolicy;
