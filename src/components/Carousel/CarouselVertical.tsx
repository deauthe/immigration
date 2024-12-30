"use client";
import * as React from "react";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

import Autoplay from "embla-carousel-autoplay";

interface CarouselApiDemoProps {
	carouselItems: React.ReactNode[];
	pagination: boolean;
	autoScrollDuration: number;
}

export default function CarouselVertical({
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
		<div className="flex flex-row gap-2 w-fit h-fit ">
			<Carousel
				opts={{
					align: "start",
				}}
				orientation="vertical"
				plugins={[plugin.current]}
				className="w-full "
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
				setApi={setApi}
			>
				<CarouselContent className="-mt-1 max-h-96 md:max-h-[450px]  flex flex-col ">
					{carouselItems.map((item, index) => {
						return (
							<CarouselItem className="max-w-lg " key={index}>
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
				<div className="md:flex flex-col gap-1 items-center justify-center hidden h-fit my-auto">
					{Array.from({ length: count }).map((_, i) => (
						<Button
							key={i}
							className={`${
								current == i + 1 && "du-btn-disabled"
							} size-5 du-btn items-center text-center hover:cursor-pointer`}
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
