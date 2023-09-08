"use client";

import React from "react";
import Image from "next/image";
import arrowLeft from "../../public/arrow-left.svg";
import arrowRight from "../../public/arrow-right.svg";
import pic1 from "../assets/Esther+Wale08.jpg";
import pic2 from "../assets/Esther+Wale06.jpg";
import pic3 from "../assets/Esther+Wale04.jpg";
import pic4 from "../assets/Esther+Wale07.jpg";
import pic5 from "../assets/Esther+Wale08.jpg";
import pic6 from "../assets/Esther+Wale10.jpg";
import pic7 from "../assets/Esther+Wale13.jpg";
import "../styles/global.scss";
import { useRef } from "react";

const Gallery = () => {
	const images = [
		{ imgURL: pic1 },
		{ imgURL: pic4 },
		{ imgURL: pic7 },
		{ imgURL: pic2 },
		{ imgURL: pic3 },
		{ imgURL: pic5 },
		{ imgURL: pic6 },
	];

	const galleryHolderRef = useRef(null);

	const scrollToStart = () => {
		if (galleryHolderRef.current) {
			galleryHolderRef.current.scrollTo({
				left: 0,
				behavior: "smooth",
			});
		}
	};

	// Function to scroll to the end
	const scrollToEnd = () => {
		if (galleryHolderRef.current) {
			const scrollContainer = galleryHolderRef.current;
			const scrollWidth = scrollContainer.scrollWidth;
			scrollContainer.scrollTo({
				left: scrollWidth,
				behavior: "smooth",
			});
		}
	};
	return (
		<div id="gallery">
			<div className="flex justify-between items-center heading">
				<h1>GALLERY</h1>
				<div className="flex">
					<Image
						src={arrowLeft}
						alt=""
						onClick={scrollToStart}
					/>
					<Image
						src={arrowRight}
						alt=""
						onClick={scrollToEnd}
					/>
				</div>
			</div>
			<div
				className="gallery-holder"
				ref={galleryHolderRef}>
				<div className="image-scroll-container">
					{images.map((image, index) => (
						<div
							className="image-holder"
							key={index}>
							<Image src={image.imgURL} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
