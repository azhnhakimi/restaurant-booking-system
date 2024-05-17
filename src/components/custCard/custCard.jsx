import React from 'react';
import styles from './custCard.module.css';
import userLogo from '../../assets/userlogo.svg';
import editIcon from '../../assets/edit.svg';
import cancelIcon from '../../assets/cancel.svg';

const CustCard = () => {
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
            <div className={styles.actions}>
                <img src={cancelIcon} alt="Cancel" title="Edit reservation" />
                <img src={editIcon} alt="Edit" title="Cancel Reservation" />
            </div>
        </div>
    );
};

export default CustCard;
