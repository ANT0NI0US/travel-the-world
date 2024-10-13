import { Link } from "react-router-dom";
import { formatDate } from "@/utils/helpers";
import { useCities } from "@/contexts/CitiesContext";
import styles from "./CityItem.module.css";
import CountryFlag from "@/ui/CountryFlag";

export default function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <div className={styles.parties}>
          <CountryFlag countryCode={emoji} />
          <h3 className={styles.name}>{cityName}</h3>
        </div>

        <div className={styles.parties}>
          <time className={styles.date}>({formatDate(date)})</time>
          <button className={styles.deleteBtn} onClick={handleClick}>
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
}
