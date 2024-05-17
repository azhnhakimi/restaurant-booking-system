import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import styles from './Navbar3.module.css';
import companyLogo from '../../assets/clearLogo.svg';

const Navbar3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img className={styles.logo} src={companyLogo} alt="company logo" />
      </div>
      <div className={styles.rightSide}>
        <ul className={styles.listContainer}>
          <li className={styles.linkContainer}>
            <Link to="/" className={styles.redirectLink}>Home</Link>
          </li>
          <li className={styles.linkContainer}>
            <Link to="/menu" className={styles.redirectLink}>Menu</Link>
          </li>
          <li className={styles.linkContainer}>
            <Link to="/adminbooking" className={styles.redirectLink}>Reservation</Link>
          </li>
          <li className={styles.linkContainer}>
            <Link to="/login" className={styles.redirectLink}>Sign Out</Link> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar3;
