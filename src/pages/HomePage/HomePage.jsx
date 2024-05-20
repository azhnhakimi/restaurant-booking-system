import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from '../../components/Navbar2/Navbar2';
import { useAuth } from '../../AuthContext';
import styles from "./HomePage.module.css";
import HomeImage from '../../assets/Home.png';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
    return (
        <div>
          {isAuthenticated ? <Navbar2 /> : <Navbar />}
          <div className={styles.container}>
            <img src={HomeImage} alt="Home" className={styles.homeImage} />
            <div className={styles.textContainer}>
              <p>
                Founded in April 2024, MOVE entered the market as a restaurant brand that aimed to create a cozy spot for food enthusiasts, a place where everyone could feel at home, and that is what they did and will continue to do.
              </p>
              <p>
                Over the years, MOVE has built a reputation as pioneers, offering Malaysia’s dining community many memorable experiences, whether it be through their innovative Flavor Hub, a highly praised culinary hub designed to support aspiring chefs and food lovers, a creative marketing and event company renowned for their inventive ideas and flawless execution of major dining events in Malaysia, three years in a row.
              </p>
              <p>
                MOVE’s mission is not only to set new standards in dining but also to awaken the foodie in you, and its vision? To become a part of everyday life.
              </p>
            </div>
          </div>
        </div>
    );
};

export default HomePage;
