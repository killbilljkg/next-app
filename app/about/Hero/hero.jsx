import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";
import AboutImg from "@/public/Bgimages/About4.webp";

function Hero() {
  return (
    <section className={styles.wrapper}>

      {/* Background Image */}
      <div className={styles.bgWrap}>
        <Image
          src={AboutImg}
          alt="ARCA AI hero background"
          fill
          priority
          className={styles.bgImage}
        />
      </div>  


      <div className={styles.swcontainer}>
        <div className={styles.heroGrid}>

          {/* LEFT CONTENT */}
          <div className={styles.heroTitle}>
            <h1 className={styles.heroH1}>
              Where compassion <br /> <strong>meets precision.</strong>
            </h1>
          </div>

          {/* RIGHT / GLASS CARD */}
          <div className={styles.heroGlass}>
            <div className={styles.glasscard}>
              <p className={styles.pText}>
                ARCA AI exists to bring humanity back to healthcare through
                intelligent, ethical, and deeply empathetic technology.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
