import React from 'react'
import styles from './BenefitsCard.module.css'

function BenefitsCard({ number = "01.", title, description, bgColor = "#e6eadf", textColor = "#111", }) {
  return (
    <div className={styles.card} style={{
        backgroundColor: bgColor,
        color: textColor,
      }}>
      <span className={styles.number}>{number}</span>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default BenefitsCard

