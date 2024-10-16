const BASE_URL = "https://flagcdn.com";

export default function CountryFlag({ countryCode }) {
  return (
    <img
      loading="lazy"
      src={`${BASE_URL}/${countryCode?.toLowerCase()}.svg`}
      alt={`Flag of ${countryCode}`}
      style={{ height: "30px" }}
    />
  );
}
