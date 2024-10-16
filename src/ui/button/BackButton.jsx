import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BackButton() {
  const navigate = useNavigate();

  function handleBackClick(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <Button Label="back" type="back" onClick={(e) => handleBackClick(e)}>
      &larr; Back
    </Button>
  );
}
