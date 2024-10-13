import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

const appNavLinks = [
  { text: "Cities", path: "cities" },
  { text: "Countries", path: "countries" },
];

export default function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        {appNavLinks.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
