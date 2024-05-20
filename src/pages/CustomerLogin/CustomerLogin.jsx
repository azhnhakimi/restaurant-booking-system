import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from '../../AuthContext'; // Import useAuth
import styles from "./CustomerLogin.module.css";
import companyLogo from "../../assets/companyLogo.svg";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundOverlay from '../../assets/backgroundOverlay.png';

const CustomerLogin = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth(); // Destructure login from useAuth

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/loginCustomer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ usernameOrEmail, password }),
            });
            if (response.ok) {
                toast.success("Login successful!");
                login(); // Call login to update authentication status
                navigate("/book");
            } else {
                toast.error("Invalid credentials!");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            toast.error("Error logging in!");
        }
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <img src={BackgroundOverlay} alt="Background Overlay" className={styles.backgroundOverlay} />
                <div className={styles.logoContainer}>
                    <img src={companyLogo} alt="company logo" />
                </div>
                <div className={styles.redirectContainer}>
                    <Link to="/login" className={`${styles.redirectLink} ${styles.highlight}`}>
                        Log In
                    </Link>
                    <Link to="/register" className={styles.redirectLink}>
                        Register
                    </Link>
                </div>
                <form onSubmit={handleLogin} className={styles.formContainer}>
                    <div className={styles.inputContainer}>
                        <label>
                            Email or Username<span> *</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your email or username"
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>
                            Password<span> *</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={styles.submitBtn}>LOG IN</button>
                </form>
            </div>
        </>
    );
};

export default CustomerLogin;
