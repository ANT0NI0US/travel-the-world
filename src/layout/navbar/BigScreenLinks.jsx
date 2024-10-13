import { NavLink } from "react-router-dom";
import { links } from "./links";
import styles from "./PageNav.module.css";

export default function BigScreenLinks() {
  return (
    <ul>
      {links.map((item) => (
        <li key={item.title}>
          <NavLink
            to={item.path}
            className={`${item.title === "Login" ? styles.ctaLink : ""}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
