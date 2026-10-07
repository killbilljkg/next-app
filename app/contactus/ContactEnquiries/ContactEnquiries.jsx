"use client";

import styles from "./ContactEnquiries.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactEnquiries() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(`.${styles.card}`);

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );
  return (
    <section ref={sectionRef} className={styles.section} id="partnershipenquiries">
      <div className={styles.wrapper}>

        <div className={`${styles.card} ${styles.cardDark}`}>
          <div className={styles.left}>
            <h2 className={styles.title}>Partnership Enquiries</h2>
            <p className={styles.text}>
              If you're exploring collaborations in clinical research, lifestyle medicine,
              public health programs, AI pilots, or digital transformation, our partnership
              team will connect you with the right group internally.
            </p>
          </div>

          <div className={styles.right}>
            <span className={styles.label}>PARTNERSHIPS</span>
            <a href="mailto:corporate@arcaai.com" className={styles.link}>
              corporate@arcaai.com
            </a>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardMid}`}>
          <div className={styles.left}>
            <h2 className={styles.title}>Media & Press Enquiries</h2>
            <p className={styles.text}>
              For interviews, speaking requests, brand assets, or press information,
              please contact our communications desk.
            </p>
          </div>

          <div className={styles.right}>
            <span className={styles.label}>PRESS EMAIL</span>
            <a href="corporate@arcaai.com" className={styles.link}>
              corporate@arcaai.com
            </a>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardLight}`}>
          <div className={styles.left}>
            <h2 className={styles.title}>Careers</h2>
            <p className={styles.text}>
              We’re always looking for talented engineers, clinicians, researchers,
              and designers who believe technology should serve humanity.
              If you want to be part of ARCA’s journey, explore open roles or share your profile.
            </p>
          </div>

          <div className={styles.right}>
            <span className={styles.label}>CAREERS EMAIL</span>
            <a href="mailto:corporate@arcaai.com" className={styles.link}>
              corporate@arcaai.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
