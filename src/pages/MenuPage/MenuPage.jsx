import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from '../../components/Navbar2/Navbar2';
import styles from "./MenuPage.module.css"
import MenuImage from '../../assets/Menu.png';
import BackgroundOverlay from '../../assets/backgroundOverlay.png';
import { useAuth } from '../../AuthContext';

const MenuPage = () => {
  const { isAuthenticated } = useAuth();
    return (
        <div>
          {isAuthenticated ? <Navbar2 /> : <Navbar />}
          <div className={styles.container}>
            <img src={MenuImage} alt="Menu" className={styles.menuImage} />
            <img src={BackgroundOverlay} alt="Background Overlay" className={styles.backgroundOverlay} />
          </div>
        </div>
      );
    };

export default MenuPage;
