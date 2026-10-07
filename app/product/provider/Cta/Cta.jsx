import React from 'react'
import styles from './Cta.module.css'
import ProviderCta from '../Components/ProviderCta/ProviderCta'

function Cta() {
  return (
    <section className={styles.ctasection}>
        <div className="swcontainer">
            <ProviderCta />
        </div>
    </section>
  )
}

export default Cta