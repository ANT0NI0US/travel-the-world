import { useState } from "react";
import ToggleSidebar from "./ToggleSidebar";
import SmallScreenLinks from "./SmallScreenLinks";
import BigScreenLinks from "./BigScreenLinks";
import Logo from "@/ui/logo/Logo";
import styles from "./PageNav.module.css";

export default function PageNav() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);
  return (
    <>
      <nav className={`${styles.navBigScreen} ${styles.nav} container`}>
        <Logo />

        <BigScreenLinks />

        <ToggleSidebar toggleSidebar={toggleSidebar} />
      </nav>
      {/* LINKS IN SMALL SCREENS */}
      <SmallScreenLinks showSidebar={showSidebar} closeSidebar={closeSidebar} />
    </>
  );
}
