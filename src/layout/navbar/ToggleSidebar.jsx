import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./PageNav.module.css";

export default function ToggleSidebar({ toggleSidebar }) {
  return (
    <div className={styles.iconSmallScreen} onClick={toggleSidebar}>
      <GiHamburgerMenu />
    </div>
  );
}
