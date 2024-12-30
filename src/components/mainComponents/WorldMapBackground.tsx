"use client";
import { CldImage } from "next-cloudinary";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function WorldMapBackground() {
	return (
		<CldImage
			alt=""
			src="owpntp5tcsa9si7hxxoo" // Use this sample image or upload your own via the Media Explorer
			fill
			opacity={20}
			crop={{
				type: "scale",
				source: true,
			}}
		/>
	);
}
