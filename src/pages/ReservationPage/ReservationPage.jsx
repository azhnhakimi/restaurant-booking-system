import React from 'react';
import styles from './ReservationPage.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from '../../components/Navbar2/Navbar2';
import CardComponent from '../../components/custCard/custCard';
import BackgroundOverlay from '../../assets/backgroundOverlay.png';
import { useAuth } from '../../AuthContext';

const ReservationPage = () => {
    const { isAuthenticated } = useAuth();
    return (
        <>
            {isAuthenticated ? <Navbar2 /> : <Navbar />}
            <div className={styles.container}>
                <h1 className={styles.header}>MY RESERVATION</h1>
                <img src={BackgroundOverlay} alt="Background Overlay" className={styles.backgroundOverlay} />
                <div className={styles.cardContainer}>
                    <CardComponent />
                </div>
            </div>
        </>
    );
};

export default ReservationPage;
