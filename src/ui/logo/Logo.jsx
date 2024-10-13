import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logoCont}>
      <img src="/icon.webp" alt="TravelTheWorld logo" />
      <h1>Travel the World</h1>
    </Link>
  );
}
