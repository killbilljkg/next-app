import React from 'react'
import styles from './FinalCta.module.css'
import Button from '../Button/Button'
import Img from '@/public/Cta/Cta_Image1.webp'
import Image from 'next/image'

function FinalCta() {
  return (
    <section className={styles.FinalCtaSection}>
        <div className={styles.leftinfo}>
            <h2 className={styles.title}>
                <span>Let’s</span>
                <span>transform</span>
                <span className={styles.bold}>healthcare</span>
                <span className={styles.bold}>together</span></h2>
            <p className={styles.desc}>Whether you’re building the hospital of the future, advancing precision research, or improving community health -ARCA AI is your partner in ethical, connected innovation.</p>
            <div className={styles.buttons}>
                <Button href='/contactus' variant="filled" bgColor="#008584" textColor="#fff">
                    Get In Touch
                </Button>
                <Button href='/contactus#partnershipenquiries' variant="outline" bgColor="#F7F7F5" borderColor="#008584" textColor="#111">
                    Partnership Enquires
                </Button>
            </div>
        </div>
        <div className={styles.rightimg}>
            <div className={styles.imageWrap}>
                <Image
                    src={Img}
                    alt="Cta Image"
                    fill
                    priority
                />
            </div>
        </div>
    </section>
  )
}

export default FinalCta