import React from 'react';
import styles from './AdminBooking.module.css';
import Navbar3 from '../../components/Navbar3/Navbar3';
import CardComponent from '../../components/adminCard/adminCard'; // Adjust the import path as necessary
import BackgroundOverlay from '../../assets/backgroundOverlay.png';

const AdminBooking = () => {
    return (
        <>
            <Navbar3 />
            <div className={styles.container}>
                <h1 className={styles.header}>BOOKINGS</h1>
                <img src={BackgroundOverlay} alt="Background Overlay" className={styles.backgroundOverlay} />
                <div className={styles.cardContainer}>
                    <CardComponent />
                </div>
            </div>
        </>
    );
};

export default AdminBooking;
