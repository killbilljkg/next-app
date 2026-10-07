import React from 'react'
import styles from './Cta.module.css'
import PayerCta from '../Components/PayerCta/PayerCta'

function Cta() {
  return (
    <section className={styles.ctasection}>
        <div className="swcontainer">
            <PayerCta />
        </div>
    </section>
  )
}

export default Cta