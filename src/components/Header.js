import React from "react";
import Navbar from "./Navbar";
import "../styles/global.scss";

const Header = () => {
	return (
		<header>
			<Navbar />
			<div className="header-info">
				<p> 2nd of December, 2023</p>
				<hr />
				<p>Jerome&apos;s Garden, Ikeja</p>
			</div>
		</header>
	);
};

export default Header;
