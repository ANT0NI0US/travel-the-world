import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { links } from "./links";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import styles from "./PageNav.module.css";

export default function SmallScreenLinks({ showSidebar, closeSidebar }) {
  const ref = useOutsideClick(() => closeSidebar());

  return (
    showSidebar && (
      <div className={styles.smallScreenContainer}>
        {/* OVERLAY */}
        <div className={styles.overlay}></div>

        {/* SIDEBAR */}
        <nav ref={ref} className={`${styles.navSmallScreen} ${styles.nav}`}>
          {/* CLOSE SIDEBAR BUTTON*/}
          <div className={styles.closeBtn}>
            <button aria-label="Close-icon" onClick={closeSidebar}>
              <div>
                <IoCloseSharp size={20} />
              </div>
            </button>
          </div>

          {/* LINKS */}
          <ul>
            {links?.map((item) => (
              <li onClick={() => closeSidebar()} key={item.title}>
                <NavLink
                  to={item.path}
                  className={`${item.title === "Login" ? styles.ctaLink : ""}`}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  );
}
