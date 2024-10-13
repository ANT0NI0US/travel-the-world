import CountryFlag from "@/ui/CountryFlag";
import styles from "./CountryItem.module.css";

export default function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <CountryFlag countryCode={country.emoji} />
      <span>{country.country}</span>
    </li>
  );
}
