import React from "react";
import Image from "next/image";
import styles from "./ProviderHero.module.css";
import PayerImg from "@/public/Bgimages/Provider.webp";
import Button from "@/app/Components/Button/Button";

function ProviderHero() {
  return (
    <section className={styles.wrapper}>

      {/* Background Image */}
      <div className={styles.bgWrap}>
        <Image
          src={PayerImg}
          alt="ARCA AI"
          fill
          priority
          className={styles.bgImage}
        />
      </div>


      <div className={styles.swcontainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroTitle}>
            <h1 className={styles.heroH1}>
              Designed<br /> <span className={styles.darkblue}>For Providers</span>
            </h1>
          </div>

          <div className={styles.heroText}>
            <p>Built to Strengthen Care</p>
          </div>

          <div className={styles.divider} />


          <div className={styles.heroButtons}>
            <Button href='/contactus' variant="filled" bgColor="#1F3435" textColor="#fff">
                Get a Demo
            </Button>
            <Button href='/contactus' variant="filled" bgColor="#F7F7F5" textColor="#000">
                Speak to a Specialist
            </Button>

          </div>

          <div className={styles.heroGlass}>
            <div className={styles.glasscard}>
              <p className={styles.pText}>
                Delivering care shouldn’t mean losing time to screens, paperwork, or fragmented systems. ARCA AI empowers clinicians with ethical, practical, and human-centered intelligence that reduces administrative load, improves accuracy, and restores meaningful patient time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProviderHero;
