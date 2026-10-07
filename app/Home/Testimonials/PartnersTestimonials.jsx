import React from 'react'
import styles from './PartnersTestimonials.module.css'
import Image from 'next/image'
import Img from '@/public/testimonialsimage.webp'
import Button from '@/app/Components/Button/Button'

function PartnersTestimonials() {
  return (
    <section className={styles.PartnersTestimonials}>

        {/* Background image layer */}
        <div className={styles.bgWrap} aria-hidden="true">
            <Image
            src={Img}
            alt=""
            fill
            priority
            className={styles.bgImage}
            />
        </div>
          <div className="swcontainer">
            <div className={styles.sectionWrapper}>
                <h2 className={styles.title}>What our partners say</h2>
    
                <div className={styles.testimonials}>
                    <div className={`${styles.testimonialCard} ${styles.card1}`}>
                        <div className={styles.testimonialBrand}>
                            <Image
                            src="/Partners/BCMH.png"
                            alt=""
                            width={70}
                            height={56}
                            />
                        </div>

                        {/* Description */}
                        <p className={styles.testimonialDesc}>
                            “We were especially impressed with their Ambient Listening module, and have already initiated steps toward developing a robust working model. Many of our clinicians are actively collaborating with the ARCA AI team to build an efficient and transformative platform.”
                        </p>

                        {/* Description */}
                        <p className={styles.testimonialAuthor}>
                            — Dr. George Chandy, CEO & Director, BCMCH
                        </p>

                    </div>
                    <div className={`${styles.testimonialCard} ${styles.rightalign} ${styles.card2}`}>
                        <div className={styles.testimonialBrand}>
                            <Image
                            src="/IIS_LOGO.jpg"
                            alt=""
                            width={70}
                            height={56}
                            />
                        </div>

                        {/* Description */}
                        <p className={styles.testimonialDesc}>
                            “Over the past few years, I have followed Arca AI’s work closely and have been particularly impressed by their focus on solving some of India’s most pressing healthcare challenges - specifically, the problem of unstructured and inconsistent medical documentation.”
                        </p>

                        {/* Description */}
                        <p className={styles.testimonialAuthor}>
                            — Prof. Saini, Ph.D. Indian Institute of Science
                        </p>

                    </div>
    
                </div>
    
                <Button href='/press' variant="filled" bgColor="#D6FDFF" textColor="#111">
                  See All Collaborations
                </Button>
    
            </div>
          </div>
    </section>
  )
}

export default PartnersTestimonials