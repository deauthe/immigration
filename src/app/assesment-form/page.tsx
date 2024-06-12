import AssesmentFormContent from "@/components/FormContents/AssesmentFormContent";

const onSubmit = () => {};

export default function AssesmentPage() {
	return (
		<div className="py-24 mx-auto items-center flex  flex-col lg:grid lg:grid-cols-4 gap-0 bg-black lg:px-32">
			<div className="w-full h-full col-span-3  flex flex-col">
				<div className="text-xl md:text-4xl font-extralight tracking-tighter w-fit mx-auto uppercase text-primary-content text-center">
					BMOR free assesment form
				</div>
				<div
					className="hidden md:block du-hero h-full  bg-green-300 rounded-3xl overflow-hidden p-3"
					style={{
						backgroundImage: "url(/assesmentCover.jpg)",
					}}
				></div>
			</div>
			<div className="col-span-1 p-3">
				<AssesmentFormContent userId="1" />
			</div>
		</div>
	);
}
