import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "BMOR Immigration",
	description: "providing solutions to immigration in Canada",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Providers>
			<html data-theme="mytheme" lang="en">
				<body className={`${inter.className} `}>
					{/* <Navbar />
					{children}
					<Footer /> */}
					<div className="w-full h-screen bg-black text-white flex justify-center items-center">
						Website in the making
					</div>
					<Toaster />
				</body>
			</html>
		</Providers>
	);
}
