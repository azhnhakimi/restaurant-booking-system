import styles from "./Navbar.module.css";
import companyLogo from "../../assets/clearLogo.svg";

const Navbar = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.leftSide}>
					<img
						className={styles.logo}
						src={companyLogo}
						alt="company logo"
					/>
				</div>
				<div className={styles.rightSide}>
					<ul className={styles.listContainer}>
						<li className={styles.linkContainer}>
							<a href="" className={styles.redirectLink}>
								Home
							</a>
						</li>
						<li className={styles.linkContainer}>
							<a href="" className={styles.redirectLink}>
								Menu
							</a>
						</li>
						<li className={styles.linkContainer}>
							<a href="" className={styles.redirectLink}>
								Sign In
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
