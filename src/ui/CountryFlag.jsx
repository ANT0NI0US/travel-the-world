const BASE_URL = "https://flagcdn.com";

export default function CountryFlag({ countryCode }) {
  return (
    <img
      src={`${BASE_URL}/${countryCode?.toLowerCase()}.svg`}
      alt={`Flag of ${countryCode}`}
      style={{ height: "30px" }}
    />
  );
}
