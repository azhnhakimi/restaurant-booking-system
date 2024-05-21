import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import styles from "./TableBook.module.css";
import { useAuth } from "../../AuthContext";

const TableBook = () => {
	const { isAuthenticated } = useAuth();
	const navigate = useNavigate();
	const [reservationTime, setReservationTime] = useState(""); // State to track the selected reservation time
	const [reservationDate, setReservationDate] = useState(""); // State to track the selected reservation date
	const [numberOfPax, setNumberOfPax] = useState(""); // State to track the selected number of pax

	const [name, setName] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [email, setEmail] = useState("");

	const handleTimeChange = (event) => {
		setReservationTime(event.target.value);
	};

	const handleDateChange = (event) => {
		setReservationDate(event.target.value);
	};

	const handlePaxChange = (event) => {
		setNumberOfPax(event.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			name: name,
			contactNumber: contactNumber,
			email: email,
			reservationTime: reservationTime,
			reservationDate: reservationDate,
			numberOfPax: numberOfPax,
		};

		try {
			const response = await fetch("/api/createReservation", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				console.log("Reservation created successfully.");
				navigate("/custreservation");
			} else {
				console.log("Failed to create reservation.");
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			{isAuthenticated ? <Navbar2 /> : <Navbar />}
			<div className={styles.container}>
				<h1 className={styles.header}>BOOK A TABLE</h1>
				<form className={styles.content}>
					<div className={styles.inputContainer}>
						<label className={styles.label}>
							Name <span className={styles.required}>*</span>
						</label>
						<input
							type="text"
							className={styles.input}
							placeholder="Enter your full name"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>
							Reservation Time{" "}
							<span className={styles.required}>*</span>
						</label>
						<select
							className={styles.dropdown}
							value={reservationTime}
							onChange={handleTimeChange}
						>
							<option value="" disabled hidden>
								Choose your reservation time
							</option>
							<option
								value="2:00pm"
								className={styles.biggerText}
							>
								2:00pm
							</option>
							<option
								value="2:30pm"
								className={styles.biggerText}
							>
								2:30pm
							</option>
							<option
								value="3:00pm"
								className={styles.biggerText}
							>
								3:00pm
							</option>
							<option
								value="3:30pm"
								className={styles.biggerText}
							>
								3:30pm
							</option>
							<option
								value="4:00pm"
								className={styles.biggerText}
							>
								4:00pm
							</option>
							<option
								value="4:30pm"
								className={styles.biggerText}
							>
								4:30pm
							</option>
							<option
								value="5:00pm"
								className={styles.biggerText}
							>
								5:00pm
							</option>
							<option
								value="5:30pm"
								className={styles.biggerText}
							>
								5:30pm
							</option>
							<option
								value="6:00pm"
								className={styles.biggerText}
							>
								6:00pm
							</option>
							<option
								value="6:30pm"
								className={styles.biggerText}
							>
								6:30pm
							</option>
							<option
								value="7:00pm"
								className={styles.biggerText}
							>
								7:00pm
							</option>
							<option
								value="7:30pm"
								className={styles.biggerText}
							>
								7:30pm
							</option>
							<option
								value="8:00pm"
								className={styles.biggerText}
							>
								8:00pm
							</option>
							<option
								value="8:30pm"
								className={styles.biggerText}
							>
								8:30pm
							</option>
							<option
								value="9:00pm"
								className={styles.biggerText}
							>
								9:00pm
							</option>
						</select>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>
							Contact Number{" "}
							<span className={styles.required}>*</span>
						</label>
						<input
							type="number"
							className={styles.input}
							placeholder="Enter your contact number"
							required
							value={contactNumber}
							onChange={(e) => setContactNumber(e.target.value)}
						/>
					</div>
					<div className={styles.dropdownContainer}>
						<label className={styles.label}>
							Reservation Date{" "}
							<span className={styles.required}>*</span>
						</label>
						<input
							type="date"
							className={styles.inputDateBox}
							value={reservationDate}
							onChange={handleDateChange}
						/>
					</div>
					<div className={styles.dropdownContainer}>
						<label className={styles.label}>
							Email <span className={styles.required}>*</span>
						</label>
						<input
							type="email"
							className={styles.input}
							placeholder="Enter your email address"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.dropdownContainer}>
						<label className={styles.label}>
							No. of Pax{" "}
							<span className={styles.required}>*</span>
						</label>
						<select
							className={styles.dropdown}
							value={numberOfPax}
							onChange={handlePaxChange}
						>
							<option value="" disabled hidden>
								Choose number of pax
							</option>
							<option value="1" className={styles.biggerText}>
								1
							</option>
							<option value="2" className={styles.biggerText}>
								2
							</option>
							<option value="3" className={styles.biggerText}>
								3
							</option>
							<option value="4" className={styles.biggerText}>
								4
							</option>
							<option value="5" className={styles.biggerText}>
								5
							</option>
							<option value="6" className={styles.biggerText}>
								6
							</option>
							<option value="7" className={styles.biggerText}>
								7
							</option>
							<option value="8" className={styles.biggerText}>
								8
							</option>
						</select>
					</div>
					<button onClick={handleSubmit} className={styles.button}>
						BOOK NOW
					</button>
				</form>
			</div>
		</div>
	);
};

export default TableBook;
