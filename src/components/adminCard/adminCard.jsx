import React from 'react';
import styles from './adminCard.module.css';
import userLogo from '../../assets/userlogo.svg';
import removeIcon from '../../assets/remove.svg';

const AdminCard = () => {
    return (
        <div className={styles.card}>
            <img src={userLogo} alt="User Logo" />
            <div className={styles.info}>
                <p>Name :</p>
                <p>Number :</p>
                <p>Date :</p>
                <p>Time :</p>
                <p>No. of Pax :</p>
            </div>
            <div className={styles.removeButton}>
                <img src={removeIcon} alt="Remove Icon" />
                <span>REMOVE</span>
            </div>
        </div>
    );
};

export default AdminCard;
