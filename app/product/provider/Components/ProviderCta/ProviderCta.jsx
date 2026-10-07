import React from 'react'
import styles from './ProviderCta.module.css'
import Img from '@/public/Cta/Cta_Image2.webp'
import Image from 'next/image'
import Button from '@/app/Components/Button/Button'

function ProviderCta() {
  return (
    <section className={styles.ProviderCtaSection}>
        <div className={styles.leftinfo}>
            <h2 className={styles.title}>
                <span className={styles.bold}>Experience</span>
                <span className={styles.bold}>Healthcare AI</span>
                <span>That Works at</span>
                <span>the Bedside </span>
                </h2>
            <p className={styles.desc}>See how ARCA AI can reduce documentation load, enhance clinical accuracy, and transform your care delivery.</p>
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

export default ProviderCta