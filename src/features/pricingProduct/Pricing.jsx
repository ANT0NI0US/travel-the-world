import styles from "./Product.module.css";

export default function Product() {
  return (
    <div className={styles.product}>
      <h2>
        Simple pricing.
        <br />
        Just $9/month.
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
        labore mollitia iusto. Recusandae quos provident, laboriosam fugit
        voluptatem iste.
      </p>
    </div>
  );
}
