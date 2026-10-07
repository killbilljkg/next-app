import React from 'react'
import styles from './Cta.module.css'
import PressCta from '../Components/PressCta/PressCta'

function Cta() {
  return (
    <section className={styles.ctasection}>
      <div className="swcontainer">
        <PressCta />
      </div>

    </section>
  )
}

export default Cta