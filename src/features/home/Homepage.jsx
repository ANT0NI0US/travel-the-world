import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <div className={`${styles.homepage}`}>
      <h1>Keep track of your adventures.</h1>
      <h2>
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </h2>
      <Link to="/login" className="cta">
        Start tracking now
      </Link>
    </div>
  );
}
