import { Outlet } from "react-router-dom";
import PageNav from "../navbar/PageNav";
import styles from "./HomeLayout.module.css";

export default function HomeLayout() {
  return (
    <main className={`${styles.homeLayout}`}>
      <PageNav />

      <section className="container">
        <Outlet />
      </section>
    </main>
  );
}
