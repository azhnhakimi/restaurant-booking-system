import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar";
import styles from "./CustomerRegister.module.css";
import companyLogo from "../../assets/companyLogo.svg";
import BackgroundOverlay from '../../assets/backgroundOverlay.png';

const CustomerRegister = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/registerCustomer", formData);
            toast.success("Customer registered successfully");
        } catch (error) {
            toast.error("Error registering customer");
        }
    };

    return (
        <>
            <Navbar />
            <img src={BackgroundOverlay} alt="Background Overlay" className={styles.backgroundOverlay} />
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={companyLogo} alt="company logo" />
                </div>
                <div className={styles.redirectContainer}>
                    <Link to="/login" className={styles.redirectLink}>
                        Log In
                    </Link>
                    <Link
                        to="/register"
                        className={`${styles.redirectLink} ${styles.highlight}`}
                    >
                        Register
                    </Link>
                </div>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.inputContainerWrapper}>
                        <div className={styles.inputColumnContainer}>
                            <div className={styles.inputContainer}>
                                <label>
                                    Full Name<span> *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className={styles.registerInput}
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label>
                                    Username<span> *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    className={styles.registerInput}
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label>
                                    Email<span> *</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={styles.registerInput}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={styles.inputColumnContainer}>
                            <div className={styles.inputContainer}>
                                <label>
                                    Contact Number<span> *</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter your contact number"
                                    className={styles.registerInput}
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label>
                                    Password<span> *</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className={styles.registerInput}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label>
                                    Confirm Password<span> *</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    className={styles.registerInput}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <button className={styles.submitBtn}>REGISTER</button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default CustomerRegister;
