import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/FakeAuthContext";
import styles from "./User.module.css";
import Button from "@/ui/button/Button";

export default function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <Button type="primary" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
}
