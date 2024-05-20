import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../../AuthContext';
import { toast } from 'react-toastify';
import styles from './Navbar2.module.css';
import companyLogo from '../../assets/clearLogo.svg';

const Navbar2 = () => {
    const { logout } = useAuth();
    const navigate = useNavigate(); // Use useNavigate hook

    const handleSignOut = () => {
        logout();
        // Display notification when the user successfully signs out
        toast.success("You have successfully signed out.");
        // Redirect to the home page after signing out
        navigate('/');
    };

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
                        <Link to="/book" className={styles.redirectLink}>Book A Table</Link>
                    </li>
                    <li className={styles.linkContainer}>
                        <Link to="/custreservation" className={styles.redirectLink}>My Reservation</Link>
                    </li>
                    <li className={styles.linkContainer}>
                        <button onClick={handleSignOut} className={styles.redirectLink}>Sign Out</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar2;
