import React from 'react'
import BenefitsCard from '@/app/Components/BenefitsCard/BenefitsCard';
import { BENEFITS } from "./constants";
import styles from './Benefits.module.css'

function Benefits() {
  return (
    <section className={styles.Benefits}>
      <div className="swcontainer">
        <div className={styles.sectionWrapper}>
            <h2 className={styles.title}> <span className={styles.boldtext}>Benefits</span> for Providers</h2>
            <div className={styles.grid}>
                {BENEFITS.map((item) => (
                <BenefitsCard
                    key={item.id}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                    bgColor={item.bgColor}
                    textColor={item.textColor}
                />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits