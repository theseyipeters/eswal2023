import React from "react";
import Image from "next/image";
import wale from "../assets/Esther+Wale03.jpg";
import esther from "../assets/Esther+Wale10.jpg";
import "../styles/global.scss";

const LoveStory = () => {
	return (
		<div id="love-story">
			<div className="heading">OUR LOVE STORY</div>
			<div className="story">
				<div className="story-container">
					<div className="imgHolder">
						<Image
							src={wale}
							alt=""
							className="image"
						/>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
						vitae tempus quam pellentesque. Ut diam quam nulla porttitor. Sit
						amet nulla facilisi morbi tempus iaculis. Auctor neque vitae tempus
						quam pellentesque nec nam aliquam sem. Adipiscing commodo elit at
						imperdiet dui accumsan sit. Cursus vitae congue mauris rhoncus
						aenean vel elit scelerisque mauris. Aliquet bibendum enim facilisis
						gravida neque. Justo laoreet sit amet cursus sit amet dictum sit.
						Felis imperdiet proin fermentum leo vel orci porta non. Id volutpat
						lacus laoreet non curabitur gravida arcu ac tortor. Consequat mauris
						nunc congue nisi vitae suscipit tellus. Eros donec ac odio tempor.
						Donec ac odio tempor orci dapibus ultrices.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
						vitae tempus quam pellentesque. Ut diam quam nulla porttitor. Sit
						amet nulla facilisi morbi tempus iaculis. Auctor neque vitae tempus
						quam pellentesque nec nam aliquam sem. Adipiscing commodo elit c
						odio tempor orci dapibus ultrices. Neque vitae tempus quam
						pellentesque. Ut diam quam nulla porttitor. Sit amet nulla facilisi
						morbi tempus iaculis. Auctor neque vitae tempus quam pellentesque
						nec nam aliquam sem
						<h5 className="font-semibold mt-10">
							Olawale Ajiboye, <span className="font-normal">The Groom.</span>
						</h5>
					</p>
				</div>
			</div>
			<div className="story">
				<div className="story-container">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
						vitae tempus quam pellentesque. Ut diam quam nulla porttitor. Sit
						amet nulla facilisi morbi tempus iaculis. Auctor neque vitae tempus
						quam pellentesque nec nam aliquam sem. Adipiscing commodo elit at
						imperdiet dui accumsan sit. Cursus vitae congue mauris rhoncus
						aenean vel elit scelerisque mauris. Aliquet bibendum enim facilisis
						gravida neque. Justo laoreet sit amet cursus sit amet dictum sit.
						Felis imperdiet proin fermentum leo vel orci porta non. Id volutpat
						lacus laoreet non curabitur gravida arcu ac tortor. Consequat mauris
						nunc congue nisi vitae suscipit tellus. Eros donec ac odio tempor.
						Donec ac odio tempor orci dapibus ultrices.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
						vitae tempus quam pellentesque. Ut diam quam nulla porttitor. Sit
						amet nulla facilisi morbi tempus iaculis. Auctor neque vitae tempus
						quam pellentesque nec nam aliquam sem. Adipiscing commodo elit c
						odio tempor orci dapibus ultrices. Neque vitae tempus quam
						pellentesque. Ut diam quam nulla porttitor. Sit amet nulla facilisi
						morbi tempus iaculis. Auctor neque vitae tempus quam pellentesque
						nec nam aliquam sem
						<h5 className="font-semibold mt-10">
							Esther Obisanya, <span className="font-normal">The Bride.</span>
						</h5>
					</p>
					<div className="imgHolder">
						<Image
							src={esther}
							alt=""
							className="image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoveStory;
