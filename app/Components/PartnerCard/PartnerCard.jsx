import React from 'react';
import styles from './PartnerCard.module.css';


export function PartnerCard({ partner }) {
  return (
    <div
      className={styles.card}
    >
      {/* Logo Container */}
      <div className={styles.logoContainer}>
        <img
          src={partner.logo}
          alt={partner.name}
          className={styles.logo}
        />
      </div>

      <div className={styles.gradient}/>

      {/* Label Overlay */}
      <div className={styles.labelWrapper}>
        <p className={styles.label}>{partner.name}</p>
      </div>

      {/* Border */}
      <div className={styles.border}/>
    </div>
  );
}
