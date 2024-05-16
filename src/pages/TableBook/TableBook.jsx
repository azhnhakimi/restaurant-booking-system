import React, { useState } from 'react';
import Navbar2 from "../../components/Navbar2/Navbar2";
import styles from "./TableBook.module.css";

const TableBook = () => {
    const [reservationTime, setReservationTime] = useState(""); // State to track the selected reservation time
    const [reservationDate, setReservationDate] = useState(""); // State to track the selected reservation date
    const [numberOfPax, setNumberOfPax] = useState(""); // State to track the selected number of pax

    const handleTimeChange = (event) => {
        setReservationTime(event.target.value);
    };

    const handleDateChange = (event) => {
        setReservationDate(event.target.value);
    };

    const handlePaxChange = (event) => {
        setNumberOfPax(event.target.value);
    };

    return (
        <div>
            <Navbar2 />
            <div className={styles.container}>
                <h1 className={styles.header}>BOOK A TABLE</h1>
                <div className={styles.content}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>
                            Name <span className={styles.required}>*</span>
                        </label>
                        <input type="text" className={styles.input} placeholder="Enter your full name" />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>
                            Reservation Time <span className={styles.required}>*</span>
                        </label>
                        <select className={styles.dropdown} value={reservationTime} onChange={handleTimeChange}>
                            <option value="" disabled hidden>Choose your reservation time</option>
                            <option value="2:00pm" className={styles.biggerText}>2:00pm</option>
                            <option value="2:30pm" className={styles.biggerText}>2:30pm</option>
                            <option value="3:00pm" className={styles.biggerText}>3:00pm</option>
                            <option value="3:30pm" className={styles.biggerText}>3:30pm</option>
                            <option value="4:00pm" className={styles.biggerText}>4:00pm</option>
                            <option value="4:30pm" className={styles.biggerText}>4:30pm</option>
                            <option value="5:00pm" className={styles.biggerText}>5:00pm</option>
                            <option value="5:30pm" className={styles.biggerText}>5:30pm</option>
                            <option value="6:00pm" className={styles.biggerText}>6:00pm</option>
                            <option value="6:30pm" className={styles.biggerText}>6:30pm</option>
                            <option value="7:00pm" className={styles.biggerText}>7:00pm</option>
                            <option value="7:30pm" className={styles.biggerText}>7:30pm</option>
                            <option value="8:00pm" className={styles.biggerText}>8:00pm</option>
                            <option value="8:30pm" className={styles.biggerText}>8:30pm</option>
                            <option value="9:00pm" className={styles.biggerText}>9:00pm</option>
                        </select>
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>
                            Contact Number <span className={styles.required}>*</span>
                        </label>
                        <input type="text" className={styles.input} placeholder="Enter your contact number" />
                    </div>
                    <div className={styles.dropdownContainer}>
                        <label className={styles.label}>
                            Reservation Date <span className={styles.required}>*</span>
                        </label>
                        <input type="date" className={styles.inputDateBox} value={reservationDate} onChange={handleDateChange} />
                    </div>
                    <div className={styles.dropdownContainer}>
                        <label className={styles.label}>
                            Email <span className={styles.required}>*</span>
                        </label>
                        <input type="text" className={styles.input} placeholder="Enter your email address" />
                    </div>
                    <div className={styles.dropdownContainer}>
                        <label className={styles.label}>
                            No. of Pax <span className={styles.required}>*</span>
                        </label>
                        <select className={styles.dropdown} value={numberOfPax} onChange={handlePaxChange}>
                            <option value="" disabled hidden >Choose number of pax</option>
                            <option value="1" className={styles.biggerText}>1</option>
                            <option value="2" className={styles.biggerText}>2</option>
                            <option value="3" className={styles.biggerText}>3</option>
                            <option value="4" className={styles.biggerText}>4</option>
                            <option value="5" className={styles.biggerText}>5</option>
                            <option value="6" className={styles.biggerText}>6</option>
                            <option value="7" className={styles.biggerText}>7</option>
                            <option value="8" className={styles.biggerText}>8</option>
                        </select>
                    </div>
                    <button className={styles.button}>BOOK NOW</button>
                </div>
            </div>
        </div>
    );
};

export default TableBook;
