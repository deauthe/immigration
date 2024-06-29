import Image from "next/image";
import React from "react";

type Props = {};

export default function HomeCard(props: Props) {
	return (
		<div className="du-card md:du-card-side du-card-compact bg-base-100 shadow-xl rounded-sm  mx-auto max-h-96">
			<figure>
				<img src="/homeCard.jpeg" alt="Movie" className="object-fill h-full" />
			</figure>
			<div className="du-card-body md:text-left text-center">
				<h2 className="du-card-title md:text-left text-center text-lg lg:text-2xl md:text-xl uppercase">
					Canadian Immigration Services
				</h2>
				<span className="lg:text-xl md:text-lg text-md">
					Coming to Canada is a big decision, which is why at BMOR Immigration
					Services, we pride ourselves on providing the highest quality
					consultations to our customers. With BMOR, you can rest assured that
					our consultants will take you on each step of the immigration process,
					to ensure that your experience is hassle-free.
				</span>
				<p className="text-sm text-muted">
					Take this FREE assessment to see your eligibility status!
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
