import React from "react";
import Image from "next/image";
import styles from "./BlogHero.module.css";
import BlogHeroImg from "@/public/Bgimages/Blog2.webp";
import CardImg from "@/public/Blog-hero-card.png";


function BlogHero() {
  return (
    <section className={styles.wrapper}>

      <div className={styles.bgWrap}>
        <Image
          src={BlogHeroImg}
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
              Insights for a <br /> <strong>Healthier Future</strong>
            </h1>
          </div>

          <div className={styles.heroGlass}>
            <div className={styles.glasscard}>
              <div className={styles.imageWrap}>
                <Image
                  src={CardImg}
                  alt="Blog visual"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <p className={styles.pText}>
                Exploring the intersection of healthcare, AI, lifestyle medicine, and ethical innovation - through research-backed perspectives from clinicians, scientists, and technologists.
              </p>
            </div>
          </div>

        </div>

        {/* SECTION BREAK (still inside hero) */}
        <div className={styles.heroDivider}>
          <h2 className={styles.title}>Featured Products</h2>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
