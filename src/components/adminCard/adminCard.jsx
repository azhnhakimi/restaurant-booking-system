import React from "react";
import styles from "./adminCard.module.css";
import userLogo from "../../assets/userlogo.svg";
import removeIcon from "../../assets/remove.svg";

const AdminCard = ({ reservation }) => {
	return (
		<div className={styles.card}>
			<img src={userLogo} alt="User Logo" />
			<div className={styles.info}>
				<p>Name : {reservation.ReserveeName}</p>
				<p>Number : {reservation.ContactNumber}</p>
				<p>Date : {reservation.ReservationDate}</p>
				<p>Time : {reservation.ReservationTime}</p>
				<p>No. of Pax : {reservation.NumberOfPax}</p>
			</div>
			{/* <div className={styles.removeButton}>
				<img src={removeIcon} alt="Remove Icon" />
				<span>REMOVE</span>
			</div> */}
		</div>
	);
};

export default AdminCard;
