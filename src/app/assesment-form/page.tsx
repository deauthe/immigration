import AssesmentFormContent from "@/components/FormContents/AssesmentFormContent";
import PrivacyPolicy from "@/components/FormContents/PrivacyPolicy";
import WorldMapBackground from "@/components/mainComponents/WorldMapBackground";

const onSubmit = () => {};

export default function AssesmentPage() {
	return (
		<div className="py-16 mx-auto items-center flex  flex-col  gap-0 bg-transparent lg:px-32 relative">
			<div className="bg-gradient-to-b from-primary to-secondary absolute w-screen h-[500px] top-0 md:rounded-b-[20%] z-10"></div>
			<div className="inset-0 ">
				<WorldMapBackground />
			</div>
			<div className="w-full text-center md:gap-10 gap-5  flex flex-col z-10 px-5 md:px-0">
				<div className="lg:text-4xl md:text-3xl text-2xl font-extrabold  tracking-tighter w-fit mx-auto uppercase text-white text-center">
					Immigration assessment form
				</div>
				<div className="md:w-1/2 px-5 md:px-0 mx-auto text-primary-content">
					Mana Immigration is a leading Canadian immigration law firm with
					everything you need to live your dreams. Please spend a few minutes
					completing the Immigration assessment form of your choice. Once you
					complete the form, Mana Immigration will contact you to provide
					further assistance.
				</div>
			</div>
			<div className="md:w-2/3 items-center justify-between flex p-3 bg-white z-10 mt-5 rounded-md shadow-lg mx-1 md:mx-0">
				<AssesmentFormContent />
			</div>

			{/* privacy policy  */}
			<div className="mt-5">
				<PrivacyPolicy />
			</div>
		</div>
	);
}
