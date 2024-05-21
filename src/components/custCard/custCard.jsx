import React from "react";
import styles from "./custCard.module.css";
import userLogo from "../../assets/userlogo.svg";
import editIcon from "../../assets/edit.svg";
import cancelIcon from "../../assets/cancel.svg";

const CustCard = ({ reservation, handleDelete }) => {
	const onDelete = () => {
		handleDelete(reservation);
	};

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
			<div className={styles.actions}>
				{/* <img src={cancelIcon} alt="Cancel" title="Edit reservation" /> */}
				<button onClick={onDelete}>
					<img src={editIcon} alt="Edit" title="Cancel Reservation" />
				</button>
			</div>
		</div>
	);
};

export default CustCard;
