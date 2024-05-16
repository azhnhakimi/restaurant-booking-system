import Navbar from "../../components/Navbar/Navbar";
import styles from "./MenuPage.module.css"
import MenuImage from '../../assets/Menu.png';
import BackgroundOverlay from '../../assets/backgroundOverlay.png';

const MenuPage = () => {
    return (
        <div>
          <Navbar />
          <div className={styles.container}>
            <img src={MenuImage} alt="Menu" className={styles.menuImage} />
            <img src={BackgroundOverlay} alt="Background Overlay" className={styles.backgroundOverlay} />
          </div>
        </div>
      );
    };

export default MenuPage;
