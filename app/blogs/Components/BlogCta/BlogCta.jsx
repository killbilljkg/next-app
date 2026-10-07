import React from 'react'
import styles from './BlogCta.module.css'
import Img from '@/public/Cta/Cta_Image3.webp'
import Image from 'next/image'
import Button from '@/app/Components/Button/Button'

function BlogCta() {
  return (
    <section className={styles.BlogCtaSection}>
        <div className={styles.leftinfo}>
            <h2 className={styles.title}>
                <span>Stay Informed.</span>
                <span className={styles.bold}>Stay Ahead.</span>
            </h2>
            <p className={styles.desc}>Get the latest insights on clinical AI, lifestyle medicine, public health, and the future of healthcare technology.</p>
            <div className={styles.buttons}>
                <Button href='#featuredarcticle' variant="filled" bgColor="#008584" textColor="#fff">
                    Read All Articles
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

export default BlogCta