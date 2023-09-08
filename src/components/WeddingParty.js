import React from "react";
import "../styles/global.scss";
import Image from "next/image";
import nkem from "../../public/nkem.svg";
import moj from "../../public/moj.svg";
import linkedin from "../../public/linkedin.svg";

const WeddingParty = () => {
	const weddingParty = [
		{
			img: nkem,
			name: "Nkem Nweke",
			quote: `"Nkem Neque vitae tempus quam pellentesque. Ut diam quam nulla
						porttitor. Sit amet nulla facilisi morbi tempus iaculis. Auctor
						neque vitae tempus quam".`,
			position: "Groomsman",
		},
		{
			img: moj,
			name: "Nkem Nweke",
			quote: `"Nkem Neque vitae tempus quam pellentesque. Ut diam quam nulla
						porttitor. Sit amet nulla facilisi morbi tempus iaculis. Auctor
						neque vitae tempus quam".`,
			position: "Bridesmaid",
		},
		{
			img: nkem,
			name: "Nkem Nweke",
			quote: `"Nkem Neque vitae tempus quam pellentesque. Ut diam quam nulla
						porttitor. Sit amet nulla facilisi morbi tempus iaculis. Auctor
						neque vitae tempus quam".`,
			position: "Groomsman",
		},
		{
			img: moj,
			name: "Nkem Nweke",
			quote: `"Nkem Neque vitae tempus quam pellentesque. Ut diam quam nulla
						porttitor. Sit amet nulla facilisi morbi tempus iaculis. Auctor
						neque vitae tempus quam".`,
			position: "Bridesmaid",
		},
		{
			img: nkem,
			name: "Nkem Nweke",
			quote: `"Nkem Neque vitae tempus quam pellentesque. Ut diam quam nulla
						porttitor. Sit amet nulla facilisi morbi tempus iaculis. Auctor
						neque vitae tempus quam".`,
			position: "Groomsman",
		},
		{
			img: moj,
			name: "Nkem Nweke",
			quote: `"Nkem Neque vitae tempus quam pellentesque. Ut diam quam nulla
						porttitor. Sit amet nulla facilisi morbi tempus iaculis. Auctor
						neque vitae tempus quam".`,
			position: "Bridesmaid",
		},
		{
			img: nkem,
			name: "Nkem Nweke",
			quote: `"Nkem Neque vitae tempus quam pellentesque. Ut diam quam nulla
						porttitor. Sit amet nulla facilisi morbi tempus iaculis. Auctor
						neque vitae tempus quam".`,
			position: "Groomsman",
		},
		{
			img: moj,
			name: "Nkem Nweke",
			quote: `"Nkem Neque vitae tempus quam pellentesque. Ut diam quam nulla
						porttitor. Sit amet nulla facilisi morbi tempus iaculis. Auctor
						neque vitae tempus quam".`,
			position: "Bridesmaid",
		},
	];
	return (
		<section id="wedding-party">
			<div className="heading">WEDDING PARTY</div>
			<div className="content">
				{weddingParty.map((partyMember, index) => (
					<div
						className="party"
						key={index}>
						<div className="party-inner">
							<Image
								src={partyMember.img}
								alt=""
							/>
							<div className="flex justify-between items-center">
								<h1>{partyMember.name}</h1>
								{/* <Image
									src={linkedin}
									alt=""
									className="image"
								/> */}
							</div>

							<p>{partyMember.quote}</p>

							<h6>{partyMember.position}.</h6>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default WeddingParty;
