import Image from "next/image";
import "../styles/global.scss";
import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import LoveStory from "@/components/LoveStory";
import EventDetails from "@/components/EventDetails";
import WeddingParty from "@/components/WeddingParty";
import SendGift from "@/components/SendGift";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="">
			<div>
				<Header />
			</div>
			<Gallery />
			<div>
				<LoveStory />
				<EventDetails />
				<WeddingParty />
				<SendGift />
			</div>
			<Footer />
		</main>
	);
}
