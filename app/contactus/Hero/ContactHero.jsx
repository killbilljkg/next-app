import React from "react";
import Image from "next/image";
import styles from "./ContactHero.module.css";
import ContactImg from "@/public/Bgimages/Contact2.webp";

function ContactHero() {
  return (
    <section className={styles.wrapper}>

      <div className={styles.bgWrap}>
        <Image
          src={ContactImg}
          alt="ARCA AI hero background"
          fill
          priority
          className={styles.bgImage}
        />
      </div>


      <div className={styles.swcontainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroTitle}>
            <h1 className={styles.heroH1}>
              <span>Let’s Build the Future of</span>
              <span><strong>Intelligent, Ethical Healthcare</strong></span>
            </h1>
          </div>
          <div className={styles.heroGlass}>
            <div className={styles.glasscard}>
              <p className={styles.pText}>
                Whether you're a hospital, insurer, public health program, or research institution, our team is here to help you adopt AI that strengthens care, improves accuracy, and supports healthier lives.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactHero;
