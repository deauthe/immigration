import Link from "next/link";

export type WorkCardProps = {
	title: string;
	description: string;
	image: string;
	link?: {
		title: string;
		url: string;
	};
	subText?: string;
};

export default function WorkCard({
	image,
	description,
	title,
	link,
	subText,
}: WorkCardProps) {
	return (
		<div className="du-card md:du-card-side du-card-compact bg-base-100 shadow-xl rounded-sm  mx-auto max-h-[26rem] grid lg:grid-cols-2 lg:grid-rows-1 md:grid-rows-3 grid-rows-2 max-w-8xl overflow-y-auto">
			<figure className="justify-start bg-black ">
				<img
					src={image}
					alt="Movie"
					className="object-contain  w-full inset-0"
				/>
			</figure>
			<div className="du-card-body md:text-left text-center ">
				<h2 className="du-card-title md:text-left text-center text-lg lg:text-2xl md:text-xl uppercase font-bold mx-auto md:mx-0">
					<span className="text-primary">LMIA</span>
					{title}
				</h2>
				<span className="lg:text-lg md:text-base text-sm">{description}</span>
				{subText && <p className="text-sm text-muted">{subText}</p>}

				{link && (
					<div className="du-card-actions md:justify-start justify-center">
						<Link
							href={link?.title}
							className="du-btn md:du-btn-sm du-btn-xs du-btn-primary rounded-full"
						>
							{link?.title}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export function PermitCard() {
	return (
		<div className="du-card max-w-6xl ">
			<div className="du-body">
				<div className="du-card-title">
					<span>LMIA </span> <span>Work Permit</span>
				</div>
				<p></p>
			</div>
		</div>
	);
}
