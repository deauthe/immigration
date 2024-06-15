import Image from "next/image";
import React from "react";

type Props = {};

export default function HomeCard(props: Props) {
	return (
		<div className="du-card md:du-card-side du-card-compact bg-base-100 shadow-xl rounded-sm  mx-auto max-h-96">
			<figure>
				<img src="/homeCard.jpeg" alt="Movie" className="object-fill" />
			</figure>
			<div className="du-card-body md:text-left text-center">
				<h2 className="du-card-title md:text-left text-center">
					Canadian Immigration Services
				</h2>
				<span>
					At Mana Immigration (Canadian Immigration Services), we advise our
					clients to find their best pathway to become Canadian permanent
					residents. We are offering personalized consultation and services to
					all cases.
				</span>
				<p>
					Our regulated consultants take care of each step of your immigration
					process to have the best results guaranteed.
				</p>

				<div className="du-card-actions md:justify-start justify-center">
					<button className="du-btn md:du-btn-md du-btn-sm du-btn-primary rounded-full">
						FREE ASSESMENT
					</button>
				</div>
			</div>
		</div>
	);
}
