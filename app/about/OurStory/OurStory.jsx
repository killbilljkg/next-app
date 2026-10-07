"use client";

import styles from "./OurStory.module.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
    const sectionRef = useRef(null);

    useGSAP(
      () => {
        /* Divider line draw */
        gsap.fromTo(
          "[data-divider]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "[data-divider]",
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
        /* Text reveal (slightly delayed, softer) */
        gsap.from("[data-reveal]", {
          opacity: 0,
          y: 32,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 20%",
            scrub: 0.6,
          },
        });
      },
      { scope: sectionRef }
    );



  return (
    <section ref={sectionRef} className={styles.section} id="our-story">
      <div className={styles.wrapper}>
        <h2 className={styles.title} data-reveal>
          Our <span>Story</span>
        </h2>

        <div className={styles.divider} data-divider />

        <p className={`${styles.text} ${styles.left}`} data-reveal>
          Healthcare today is burdened by fragmentation, administrative overload,
          and disconnected systems that strain clinicians and diminish the patient
          experience.
        </p>

        <p className={`${styles.text} ${styles.right}`} data-reveal>
          <strong>ARCA AI was created to change that.</strong>
        </p>

        <p className={`${styles.text} ${styles.left}`} data-reveal>
          Rooted in clinical insight and engineered with advanced AI, ARCA AI is a
          value-conscious healthcare intelligence company that connects the four
          pillars of the ecosystem — providers, patients, payers, and pharma —
          on one ethical, interoperable platform.
        </p>

        <p className={`${styles.text} ${styles.right}`} data-reveal>
          Our name, Arca, comes from Noah’s Ark — a symbol of protection, unity,
          and compassion. ARCA represents the ark of healthcare, guiding humanity
          through the complexity of modern technology with safety, intelligence,
          and integrity.
        </p>

        <div className={styles.highlight} data-reveal>
          Every ARCA product is built with one belief:
        </div>
        

        <p className={`${styles.text} ${styles.center}`} data-reveal>
          <span className={styles.greentext}>Technology should amplify care, not overshadow it.</span> 
        </p>
        <p className={`${styles.text} ${styles.center}`} data-reveal>
          AI should be accountable, accurate, and empathetic. Healthcare should feel connected, proactive, and human.
        </p>

        <p className={`${styles.text} ${styles.center}`} data-reveal>
          By redesigning how information flows across the health ecosystem, ARCA
          transforms administrative complexity into clarity, strengthens
          public-health systems, and empowers caregivers to reclaim time with
          their patients.
        </p>

        <p className={`${styles.text} ${styles.center}`} data-reveal>
          <span className={styles.boldtext}>This is the shift from reactive treatment to proactive, preventive,
          and lifestyle-driven healthcare. ARCA AI builds the ecosystem that
          makes this possible.</span>
        </p>
      </div>
    </section>
  )
}

export default OurStory