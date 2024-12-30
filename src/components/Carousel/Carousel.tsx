"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

interface CarouselApiDemoProps {
	carouselItems: React.ReactNode[];
	pagination: boolean;
	autoScrollDuration: number;
}

export default function CarouselDApiDemo({
	carouselItems,
	pagination,
	autoScrollDuration,
}: CarouselApiDemoProps) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const plugin = React.useRef(
		Autoplay({ delay: autoScrollDuration, stopOnInteraction: true })
	);
	return (
		<div className=" w-full max-w-screen z-50 ">
			<Carousel
				setApi={setApi}
				className="w-full overflow-visible h-full mb-5 "
				plugins={[plugin.current]}
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent className=" ">
					{carouselItems.map((item, index) => {
						return (
							<CarouselItem className="max-w-lg h-full" key={index}>
								{item}
							</CarouselItem>
						);
					})}
				</CarouselContent>
				{!pagination && (
					<div>
						<CarouselNext />
						<CarouselPrevious />
					</div>
				)}
			</Carousel>

			{pagination && (
				<div className="flex flex-row gap-1 items-center justify-center">
					pages
					{Array.from({ length: count }).map((_, i) => (
						<Button
							key={i}
							className=" size-5 du-btn items-center text-center hover:cursor-pointer"
							onClick={() => api?.scrollTo(i)}
						>
							{i + 1}
						</Button>
					))}
				</div>
			)}
		</div>
	);
}
