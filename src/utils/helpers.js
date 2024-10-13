import { Timestamp } from "firebase/firestore"; // if you need to import this

export const formatDate = (timestamp) => {
  const validDate =
    timestamp instanceof Timestamp ? timestamp.toDate() : new Date(timestamp);

  if (isNaN(validDate.getTime())) {
    return "Invalid date";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(validDate);
};
