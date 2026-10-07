import React from "react";
import styles from "./NumbersCard.module.css";

function NumbersCard({
  value,
  description,
}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardHeading}>{value}</h2>
      <span className={styles.divider} />
      <p className={styles.cardDesc}>{description}</p>
    </div>
  );
}

export default NumbersCard;
