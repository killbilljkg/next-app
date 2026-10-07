import React from 'react'
import styles from './Numbers.module.css'
import NumbersCard from '@/app/Components/NumbersCard/NumbersCard'


function Numbers() {
  return (
    <section className={styles.Numbers}>
        <div className="swcontainer">
        <div className={styles.sectionWrapper}>
            <h2 className={styles.numbersTitle}>Precision that creates <br /> measurable change</h2>
            <p className={styles.numbersDescription}>
                Backed by pilots with hospitals, medical colleges, public health programs, and longevity research partners.
            </p>

            <div className={styles.NumbersGrid}>
                <NumbersCard 
                value="20%"
                description="Reduction in consultation time for adopted users with ARCA Ambient Listening AI"
                />
                <NumbersCard 
                value="4+/5"
                description="Average feedback rating from adopted doctors for Artificial Clinical Intelligence Suite"
                />
                <NumbersCard 
                value="30%"
                description="Improved operational efficiency on no-shows & differentiated care for VIP patients with ARCA AI Patient engagement system"
                />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Numbers