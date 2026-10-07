import React from "react";
import styles from "./visionCard.module.css";
import Image from "next/image";

function VisionCard() {
  return (
    <section className={styles.SectionPadding}>
    <div className={styles.visioncard}>
      <div className="swcontainer">
        <div className={styles.flex}>
        {/* VISION */}
        <section className={styles.section}>
          <div className={styles.grid}>
            <h2 className={styles.cardTitle}>Vision</h2>

            <div className={styles.twocol}>
              <div className={styles.imageWrap}>
                <Image
                  src="/Story/Story2.webp"
                  alt="Vision visual"
                  fill
                  priority
                />
              </div>

              <p className={styles.cardDesc}>
                To be a compelling force in creating a symbiotic ecosystem where
                AI & human wisdom unite to preserve moral values and collective
                intelligence
              </p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className={styles.section}>
          <div className={styles.grid}>
            <h2 className={styles.cardTitle}>Mission</h2>

            <div className={styles.missionGrid}>
              <div className={styles.missionLeft}>
                <p className={styles.missionIntro}>
                  To support every healthcare stakeholder with ethical,
                  practical, and human-centered AI solutions.
                </p>

                <p className={styles.missionSub}>We care to help:</p>
              </div>

              <div className={styles.missionRight}>
                <ul className={styles.missionList}>
                  <li className={styles.missionItem}>
                    <span className={styles.iconWrap}>
                      <img src="/Icons/about1.png" alt="Deliver better quality care" />
                    </span>
                    <span className={styles.text}>Deliver better quality care</span>
                  </li>
                  <li className={styles.missionItem}>
                    <span className={styles.iconWrap}>
                      <img src="/Icons/about2.png" alt="Operate with greater effeciency" />
                    </span>
                    <span className={styles.text}>Operate with greater effeciency</span>
                  </li>

                  <li className={styles.missionItem}>
                    <span className={styles.iconWrap}>
                      <img src="/Icons/about3.png" alt="Innovate responsibly" />
                    </span>
                    <span className={styles.text}>Innovate responsibly</span>
                  </li>

                  <li className={styles.missionItem}>
                    <span className={styles.iconWrap}>
                      <img src="/Icons/about4.png" alt="Lead healthier life" />
                    </span>
                    <span className={styles.text}>Lead healthier life</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </div>

      </div>
    </div>
    </section>
  );
}

export default VisionCard;
