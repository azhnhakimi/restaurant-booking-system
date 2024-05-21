import React, { useState, useEffect } from "react";
import styles from "./AdminBooking.module.css";
import Navbar3 from "../../components/Navbar3/Navbar3";
import CardComponent from "../../components/adminCard/adminCard"; // Adjust the import path as necessary
import BackgroundOverlay from "../../assets/backgroundOverlay.png";
import axios from "axios";

const AdminBooking = () => {
	const [customerDataArr, setCustomerDataArr] = useState(null);

	useEffect(() => {
		const fetchCustomerReservations = async () => {
			try {
				const response = await axios.get("/api/getAllReservations");
				setCustomerDataArr(response.data.customerData);
			} catch (e) {
				console.log(e);
			}
		};
		fetchCustomerReservations();
	}, []);

	return (
		<>
			<Navbar3 />
			<div className={styles.container}>
				<h1 className={styles.header}>BOOKINGS</h1>
				<img
					src={BackgroundOverlay}
					alt="Background Overlay"
					className={styles.backgroundOverlay}
				/>
				<div className={styles.cardContainer}>
					{customerDataArr ? (
						customerDataArr.map((reservation, index) => (
							<CardComponent
								key={index}
								reservation={reservation}
							/>
						))
					) : (
						<p>Loading...</p>
					)}
				</div>
			</div>
		</>
	);
};

export default AdminBooking;
