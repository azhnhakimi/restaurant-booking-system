import React from "react";
import { Link } from "react-router-dom";

import styles from "./CustomerLogin.module.css";
import companyLogo from "../../assets/companyLogo.svg";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundOverlay from '../../assets/backgroundOverlay.png';

const CustomerLogin = () => {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
			<img src={BackgroundOverlay} alt="Background Overlay" className={styles.backgroundOverlay} />
				<div className={styles.logoContainer}>
					<img src={companyLogo} alt="company logo" />
				</div>
				<div className={styles.redirectContainer}>
					<Link
						to="/login"
						className={`${styles.redirectLink} ${styles.highlight}`}
					>
						Log In
					</Link>
					<Link to="/register" className={styles.redirectLink}>
						Register
					</Link>
				</div>
				<form action="" className={styles.formContainer}>
					<div className={styles.inputContainer}>
						<label>
							Email or Username<span> *</span>
						</label>
						<input
							type="text"
							placeholder="Enter your email or username"
						/>
					</div>
					<div className={styles.inputContainer}>
						<label>
							Password<span> *</span>
						</label>
						<input type="text" placeholder="Enter your password" />
					</div>

					<button className={styles.submitBtn}>LOG IN</button>
				</form>
			</div>
		</>
	);
};

export default CustomerLogin;
