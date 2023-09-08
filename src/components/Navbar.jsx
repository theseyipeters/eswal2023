"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import header from "../../public/header.svg";
import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<>
			<div className="header">
				<Image
					src={header}
					alt="header"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			<nav>
				<Image
					src={logo}
					alt="logo"
				/>

				<ul>
					<li>
						<Link
							to="gallery"
							spy={true}
							smooth={true}
							offset={0}
							duration={1000}>
							Gallery
						</Link>
					</li>
					<li>
						<Link
							to="love-story"
							spy={true}
							smooth={true}
							offset={0}
							duration={1000}>
							Our love story
						</Link>
					</li>
					<li>
						<Link
							to="event-details"
							spy={true}
							smooth={true}
							offset={0}
							duration={1000}>
							Event details
						</Link>
					</li>
					<li>
						<Link
							to="wedding-party"
							spy={true}
							smooth={true}
							offset={0}
							duration={1500}>
							Wedding party
						</Link>
					</li>
					<li>
						<Link
							to="send-gift"
							spy={true}
							smooth={true}
							offset={0}
							duration={2000}>
							Gifts
						</Link>
					</li>
				</ul>

				<button>ACCEPT INVITE</button>
			</nav>
		</>
	);
};

export default Navbar;
