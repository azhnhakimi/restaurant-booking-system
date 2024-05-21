import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ReservationPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import CardComponent from "../../components/custCard/custCard";
import BackgroundOverlay from "../../assets/backgroundOverlay.png";
import { useAuth } from "../../AuthContext";

const ReservationPage = () => {
	const { isAuthenticated } = useAuth();
	const [customerDataArr, setCustomerDataArr] = useState(null);

	const getCookieValue = (name) => {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(";").shift();
		return null;
	};

	const fetchCustomerData = async (customerID) => {
		try {
			const response = await axios.get("/api/getCustomerData", {
				headers: {
					Cookie: customerID,
				},
			});
			setCustomerDataArr(response.data.customerData);
		} catch (error) {
			console.error("Error fetching customer data", error);
		}
	};

	const handleDelete = async (reservation) => {
		const reservationID = reservation.ReservationID;
		const customerID = reservation.CustomerID;
		try {
			await fetch("/api/deleteReservation", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					reservationID: reservationID,
					customerID: customerID,
				}),
			});
			fetchCustomerData(customerID);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const customerID = getCookieValue("customerID");
		if (customerID) {
			fetchCustomerData(customerID);
		} else {
			console.error("Customer ID not found in cookies");
		}
	}, []);
	return (
		<>
			{isAuthenticated ? <Navbar2 /> : <Navbar />}
			<div className={styles.container}>
				<h1 className={styles.header}>MY RESERVATION</h1>
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
								handleDelete={() => handleDelete(reservation)}
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

export default ReservationPage;
