import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import companyLogo from '../../assets/clearLogo.svg';

const Navbar = () => {
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
            <Link to="/login" className={styles.redirectLink}>Sign In</Link> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
