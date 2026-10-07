import React from 'react'
import styles from './PressHero.module.css'
import Image from 'next/image'
import Button from '@/app/Components/Button/Button'
import PressImg from '@/public/Bgimages/press.webp'

function PressHero() {
  return (
    <section className={styles.wrapper}>

      {/* Background Image */}
      <div className={styles.bgWrap}>
        <Image
          src={PressImg}
          alt="ARCA AI"
          fill
          priority
          className={styles.bgImage}
        />

        <div className={styles.bgOverlay} />
      </div>  


      <div className={styles.swcontainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroTitle}>
            <h1 className={styles.heroH1}>
              Press & Media
            </h1>
          </div>

          {/* <div className={styles.heroButtons}>
            <Button variant="filled" bgColor="#D6FDFF" textColor="#111">
                Download Press Kit
            </Button>
          </div> */}

          <div className={styles.heroGlass}>
            <div className={styles.glasscard}>
              <p className={styles.pText}>
                Stories, insights, and updates from ARCA AI - the ecosystem builder for ethical, human-centered healthcare intelligence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PressHero