import React from "react";

const EventDetails = () => {
	return (
		<section className="bg-white relative">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1440"
				height="800"
				viewBox="0 0 1440 800"
				fill="none">
				<path
					d="M835.178 196.182C1092.3 188.714 1464 0 1464 0V1002H-24V88.2819C-24 88.2819 171.992 79.1444 297.028 88.2819C510.796 103.904 620.93 202.405 835.178 196.182Z"
					fill="#232323"
				/>
			</svg>
			<div
				id="event-details"
				className="absolute">
				<h1>EVENT DETAILS</h1>

				<div className="event-content">
					<div className="flex items-center detail-container">
						<div className="flex flex-col items-end detail-holder">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="41"
									viewBox="0 0 40 41"
									fill="none">
									<path
										d="M19.9999 19.1705C18.8948 19.1705 17.835 18.7315 17.0536 17.9501C16.2722 17.1687 15.8333 16.1089 15.8333 15.0038C15.8333 13.8988 16.2722 12.8389 17.0536 12.0575C17.835 11.2761 18.8948 10.8372 19.9999 10.8372C21.105 10.8372 22.1648 11.2761 22.9462 12.0575C23.7276 12.8389 24.1666 13.8988 24.1666 15.0038C24.1666 15.551 24.0588 16.0928 23.8494 16.5983C23.64 17.1039 23.3331 17.5632 22.9462 17.9501C22.5593 18.337 22.1 18.6439 21.5944 18.8533C21.0889 19.0627 20.5471 19.1705 19.9999 19.1705ZM19.9999 3.33716C16.9057 3.33716 13.9383 4.56632 11.7503 6.75425C9.56241 8.94217 8.33325 11.9096 8.33325 15.0038C8.33325 23.7538 19.9999 36.6705 19.9999 36.6705C19.9999 36.6705 31.6666 23.7538 31.6666 15.0038C31.6666 11.9096 30.4374 8.94217 28.2495 6.75425C26.0616 4.56632 23.0941 3.33716 19.9999 3.33716Z"
										fill="white"
									/>
								</svg>
								<p>Location:</p>
							</div>
							<p>JEROME'S GARDEN, IKEJA</p>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="5"
							height="132"
							viewBox="0 0 5 132"
							fill="none">
							<path
								d="M3 2.00391L2 130.004"
								stroke="#E1864C"
								strokeOpacity="0.26"
								strokeWidth="3"
								strokeLinecap="round"
							/>
						</svg>
						<div className="flex flex-col items-start detail-holder">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="41"
									viewBox="0 0 40 41"
									fill="none">
									<path
										d="M20 3.75391C11.0258 3.75391 3.75 11.0297 3.75 20.0039C3.75 28.9781 11.0258 36.2539 20 36.2539C28.9742 36.2539 36.25 28.9781 36.25 20.0039C36.25 11.0297 28.9742 3.75391 20 3.75391ZM27.5 22.5039H20C19.6685 22.5039 19.3505 22.3722 19.1161 22.1378C18.8817 21.9034 18.75 21.5854 18.75 21.2539V10.0039C18.75 9.67239 18.8817 9.35444 19.1161 9.12002C19.3505 8.8856 19.6685 8.75391 20 8.75391C20.3315 8.75391 20.6495 8.8856 20.8839 9.12002C21.1183 9.35444 21.25 9.67239 21.25 10.0039V20.0039H27.5C27.8315 20.0039 28.1495 20.1356 28.3839 20.37C28.6183 20.6044 28.75 20.9224 28.75 21.2539C28.75 21.5854 28.6183 21.9034 28.3839 22.1378C28.1495 22.3722 27.8315 22.5039 27.5 22.5039Z"
										fill="white"
									/>
								</svg>
								<p>Time:</p>
							</div>
							<p>10:00AM</p>
						</div>
					</div>
					<div className="flex items-center detail-container">
						<div className="flex flex-col items-end detail-holder">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="41"
									viewBox="0 0 40 41"
									fill="none">
									<path
										d="M3.49992 10.0038C3.88414 8.12155 4.90689 6.42983 6.39508 5.21498C7.88327 4.00013 9.7455 3.33677 11.6666 3.33716H28.3333C30.2543 3.33677 32.1166 4.00013 33.6048 5.21498C35.0929 6.42983 36.1157 8.12155 36.4999 10.0038H3.49992ZM3.33325 13.3372V28.3372C3.33325 30.5473 4.21123 32.6669 5.77403 34.2297C7.33683 35.7925 9.45645 36.6705 11.6666 36.6705H28.3333C30.5434 36.6705 32.663 35.7925 34.2258 34.2297C35.7886 32.6669 36.6666 30.5473 36.6666 28.3372V13.3372H3.33325ZM9.99992 18.3372C9.99992 17.8951 10.1755 17.4712 10.4881 17.1586C10.8006 16.8461 11.2246 16.6705 11.6666 16.6705C12.1086 16.6705 12.5325 16.8461 12.8451 17.1586C13.1577 17.4712 13.3333 17.8951 13.3333 18.3372C13.3333 18.7792 13.1577 19.2031 12.8451 19.5157C12.5325 19.8282 12.1086 20.0038 11.6666 20.0038C11.2246 20.0038 10.8006 19.8282 10.4881 19.5157C10.1755 19.2031 9.99992 18.7792 9.99992 18.3372ZM9.99992 25.0038C9.99992 24.5618 10.1755 24.1379 10.4881 23.8253C10.8006 23.5128 11.2246 23.3372 11.6666 23.3372C12.1086 23.3372 12.5325 23.5128 12.8451 23.8253C13.1577 24.1379 13.3333 24.5618 13.3333 25.0038C13.3333 25.4459 13.1577 25.8698 12.8451 26.1823C12.5325 26.4949 12.1086 26.6705 11.6666 26.6705C11.2246 26.6705 10.8006 26.4949 10.4881 26.1823C10.1755 25.8698 9.99992 25.4459 9.99992 25.0038ZM18.3333 16.6705C18.7753 16.6705 19.1992 16.8461 19.5118 17.1586C19.8243 17.4712 19.9999 17.8951 19.9999 18.3372C19.9999 18.7792 19.8243 19.2031 19.5118 19.5157C19.1992 19.8282 18.7753 20.0038 18.3333 20.0038C17.8912 20.0038 17.4673 19.8282 17.1547 19.5157C16.8422 19.2031 16.6666 18.7792 16.6666 18.3372C16.6666 17.8951 16.8422 17.4712 17.1547 17.1586C17.4673 16.8461 17.8912 16.6705 18.3333 16.6705ZM16.6666 25.0038C16.6666 24.5618 16.8422 24.1379 17.1547 23.8253C17.4673 23.5128 17.8912 23.3372 18.3333 23.3372C18.7753 23.3372 19.1992 23.5128 19.5118 23.8253C19.8243 24.1379 19.9999 24.5618 19.9999 25.0038C19.9999 25.4459 19.8243 25.8698 19.5118 26.1823C19.1992 26.4949 18.7753 26.6705 18.3333 26.6705C17.8912 26.6705 17.4673 26.4949 17.1547 26.1823C16.8422 25.8698 16.6666 25.4459 16.6666 25.0038ZM24.9999 16.6705C25.4419 16.6705 25.8659 16.8461 26.1784 17.1586C26.491 17.4712 26.6666 17.8951 26.6666 18.3372C26.6666 18.7792 26.491 19.2031 26.1784 19.5157C25.8659 19.8282 25.4419 20.0038 24.9999 20.0038C24.5579 20.0038 24.134 19.8282 23.8214 19.5157C23.5088 19.2031 23.3333 18.7792 23.3333 18.3372C23.3333 17.8951 23.5088 17.4712 23.8214 17.1586C24.134 16.8461 24.5579 16.6705 24.9999 16.6705Z"
										fill="white"
									/>
								</svg>
								<p>Date:</p>
							</div>
							<p>2ND OF DECEMBER, 2023</p>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="5"
							height="132"
							viewBox="0 0 5 132"
							fill="none">
							<path
								d="M3 2.00391L2 130.004"
								stroke="#E1864C"
								strokeOpacity="0.26"
								strokeWidth="3"
								strokeLinecap="round"
							/>
						</svg>
						<div className="flex flex-col items-start detail-holder">
							<div className="flex items-center">
								<p>Dress code/color:</p>
							</div>
							<div className="flex space-x-2">
								<span
									className="w-6 h-6 rounded-full border"
									style={{ backgroundColor: "#97BB96" }}></span>
								<span
									className="w-6 h-6 rounded-full border"
									style={{ backgroundColor: "#800020" }}></span>
								<span
									className="w-6 h-6 rounded-full border"
									style={{ backgroundColor: "#F3C2C2" }}></span>
								<span
									className="w-6 h-6 rounded-full border"
									style={{ backgroundColor: "#F8F3E4" }}></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventDetails;