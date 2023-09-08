import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Esther + Olawale",
	description: "Official Website for Esther + Wale 2023",
	icons: {
		icon: ["favicon.ico?v=4"],
		apple: ["apple-touch-icon.png?v=4"],
		shortcut: ["apple-touch-icon.png"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
