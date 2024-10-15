import styles from "./Button.module.css";

export default function Button({ children, onClick, type, Label }) {
  return (
    <button
      aria-label={Label}
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
}
