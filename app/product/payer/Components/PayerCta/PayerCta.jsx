import React from 'react'
import styles from './PayerCta.module.css'
import Img from '@/public/Cta/Cta_Image2.webp'
import Image from 'next/image'
import Button from '@/app/Components/Button/Button'

function PayerCta() {
  return (
    <section className={styles.PayerCtaSection}>
        <div className={styles.leftinfo}>
            <h2 className={styles.title}>
                <span>Build a More</span>
                <span>Transparent,</span>
                <span className={styles.bold}>Accurate, and</span>
                <span className={styles.bold}>Trustworthy</span>
                <span className={styles.bold}>Claim System</span>
                </h2>
            <p className={styles.desc}>See how TrueClaim can strengthen risk management, simplify claims, and protect your network from fraud.</p>
            <div className={styles.buttons}>
                <Button href='/contactus' variant="filled" bgColor="#008584" textColor="#fff">
                    Request a Demo
                </Button>
                <Button href='/contactus' variant="outline" bgColor="#F7F7F5" borderColor="#008584" textColor="#111">
                    Contact Our Team
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

export default PayerCta