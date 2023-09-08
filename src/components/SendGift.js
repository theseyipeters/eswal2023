"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import PaystackPop from "@paystack/inline-js";
import paystack from "../../public/paystack.svg";

const SendGift = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [amount, setAmount] = useState("");
	const [remarks, setRemarks] = useState("");

	const isValidEmail = (email) => {
		const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
		return emailRegex.test(email);
	};

	const paywithpaystack = (e) => {
		e.preventDefault();

		if (!name || !email || !phoneNumber || !amount || !remarks) {
			alert("Please fill in all fields.");
		} else if (!isValidEmail(email)) {
			alert("Please enter a valid email address.");
		} else {
			const paystack = new PaystackPop();
			paystack.newTransaction({
				key: "pk_test_801ffc134e346a30a699e4359b1948781aa9d936",
				amount: amount * 100,
				email,
				name,
				phoneNumber,
			});
		}
	};

	return (
		<section id="send-gift">
			<div className="heading">
				<h1>Send us a gift</h1>
				<p>Nkem Neque vitae tempus quam pellentesque. Ut</p>
			</div>
			<form>
				<div className="flex flex-col w-full input">
					<label>Full name:</label>
					<input
						type="text"
						placeholder="Enter your full name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col w-full input">
					<label>Email address:</label>
					<input
						type="email"
						placeholder="Enter your email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="flex flex-col w-full input">
					<label>Phone number:</label>
					<input
						type="text"
						placeholder="Enter your email address"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>
				<div className="flex flex-col w-full input">
					<label>Amount</label>
					<input
						type="tel"
						placeholder="Enter amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						required
					/>
				</div>
				<div className="flex flex-col w-full input">
					<label>Remarks:</label>
					<textarea
						type="text"
						placeholder="Remarks"
						value={remarks}
						onChange={(e) => setRemarks(e.target.value)}
					/>
				</div>

				<div className="flex w-full">
					<button
						onClick={paywithpaystack}
						className="btn-1">
						<Image
							src={paystack}
							alt=""
							width={"20px"}
							height={"20px"}
						/>
						PAY WITH PAYSTACK
					</button>
				</div>
			</form>
		</section>
	);
};

export default SendGift;
