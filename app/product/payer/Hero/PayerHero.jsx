import React from "react";
import Image from "next/image";
import styles from "./PayerHero.module.css";
import PayerImg from "@/public/Bgimages/Payer2.webp";
import Button from "@/app/Components/Button/Button";

function PayerHero() {
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
              Precision for <br /> <strong>Every Claim.</strong>
            </h1>
          </div>

          <div className={styles.heroText}>
            <p>Confidence for Every Decision.</p>
          </div>

          <div className={styles.divider} />


          <div className={styles.heroButtons}>
            <Button href='/contactus' variant="filled" bgColor="#008584" textColor="#fff">
                Request A Demo
            </Button>
            {/* <Button href='/contactus' variant="filled" bgColor="#F7F7F5" textColor="#000">
                Speak to our team
            </Button> */}

          </div>

          <div className={styles.heroGlass}>
            <div className={styles.glasscard}>
              <p className={styles.pText}>
                TrueClaim is ARCA’s advanced AI platform designed to help insurers process claims with greater accuracy, detect fraud in real time, and strengthen trust across the healthcare network.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PayerHero;
