import styles from "./ReservationPage.module.css";
import Navbar from "../../components/Navbar/Navbar";

const ReservationPage = () => {
	return (
		<>
			<div className={styles.container}>
				<Navbar />
				<h1>Book a Table</h1>
				<form className={styles.formContainer}>
					<div className={styles.outerColumnWrapper}>
						<div className={styles.columnContainer}>
							<div className={styles.inputContainer}>
								<label>
									Name<span> *</span>
								</label>
								<input
									type="text"
									className={styles.textInput}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>
									Contact Number<span> *</span>
								</label>
								<input
									type="text"
									className={styles.textInput}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>
									Email<span> *</span>
								</label>
								<input
									type="text"
									className={styles.textInput}
								/>
							</div>
						</div>
						<div className={styles.columnContainer}>
							<div className={styles.inputContainer}>
								<label>
									Name<span> *</span>
								</label>
								<input
									type="text"
									className={styles.textInput}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>
									Contact Number<span> *</span>
								</label>
								<input
									type="text"
									className={styles.textInput}
								/>
							</div>
							<div className={styles.inputContainer}>
								<label>
									Email<span> *</span>
								</label>
								<input
									type="text"
									className={styles.textInput}
								/>
							</div>
						</div>
					</div>

					<button className={styles.reserveBtn}>book now</button>
				</form>
			</div>
		</>
	);
};

export default ReservationPage;
