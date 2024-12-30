import Link from "next/link";
import React from "react";

type Props = {};

const Hero2 = (props: Props) => {
	return (
		<div
			className="du-hero min-h-screen max-h-full"
			style={{
				backgroundImage: "url(/hero.jpg)",
				fill: "context-fill",
			}}
		>
			<div className="du-hero-overlay bg-opacity-60"></div>
			<div className="du-hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">
						WANT TO MIGRATE TO CANADA?
					</h1>
					<p className="mb-5">CICC Licenced Immigration Consultants</p>
					<Link href={"/assesment-form"} className="du-btn du-btn-primary">
						Free Assesment
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero2;
