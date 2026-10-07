import React from 'react'
import styles from './Cta.module.css'
import BlogCta from '../Components/BlogCta/BlogCta'

function Cta() {
  return (
    <section className={styles.ctasection}>
      <div className="swcontainer">
        <BlogCta />
      </div>

    </section>
  )
}

export default Cta