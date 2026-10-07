import React from 'react'
import styles from './PressCta.module.css'
import Img from '@/public/Cta/Cta_Image3.webp'
import Image from 'next/image'

function PressCta() {
  return (
    <section className={styles.PressCtaSection}>
        <div className={styles.leftinfo}>
            <h2 className={styles.title}>Media <span className={styles.bold}>Contact</span>
            </h2>
            <p className={styles.desc}>For interviews, briefings, or speaking requests, reach out to our communications team.</p>

            <div className={styles.contactBlock}>
                <p className={`${styles.label} ${styles.desc}`}>Press &amp; Media Enquiries</p>
                <a href="mailto:corporate@arcaai.com" className={styles.contactLink}>corporate@arcaai.com</a>
                <a href="tel:+919686483844" className={styles.contactLink}>+91 968 648 3844</a>
            </div>

            <div className={styles.followBlock}>
                <p className={`${styles.label} ${styles.desc}`}>Follow ARCA AI</p>

                <ul className={styles.linkList}>
                    <li>
                        <a href="https://www.linkedin.com/company/arca-ai-technology/" className={styles.followLink}>LinkedIn</a>
                    </li>
                    {/* <li>
                    <a href="#" className={styles.followLink}>Research Updates</a>
                    </li>
                    <li>
                    <a href="#" className={styles.followLink}>Product Releases</a>
                    </li>
                    <li>
                    <a href="#" className={styles.followLink}>Thought Leadership</a>
                    </li> */}
                </ul>
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

export default PressCta