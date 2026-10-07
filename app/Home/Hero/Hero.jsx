"use client";

import React, { useRef } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/app/Components/Button/Button";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);

    // ===============================
  // ADDED: Timeline refs
  // ===============================
  const timelineWrapRef = useRef(null);
  const timelineLineRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        pin: videoRef.current,
        start: "top top",
        end: "bottom bottom",
        pinSpacing: false,
      });
      // ===============================
      // ADDED: Timeline animation
      // ===============================
      const items = gsap.utils.toArray(
        `.${styles.timelineItem}`
      );

      // Line grows
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: timelineWrapRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
            // markers: true,
          },
        }
      );

      // Items fade + rise
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 85%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className={styles.wrapper} id="hero">
      <div ref={videoRef} className={styles.videocontainer}>
        <video
          className={styles.videobg}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          fetchPriority="high"
          poster="/Bgimages/Hero_Poster.webp"
          src="/Videos/Arca_Hero_10.mp4"
        >
          {/* <source
            src="https://cms.arcaai.com/wp-content/uploads/2026/02/Arca_Hero_10.mp4"
            type="video/mp4"
          /> */}
          {/* <source
            src="/Videos/Arca_Hero_10.mp4"
            type="video/mp4"
          /> */}
        </video>
        <div className={styles.videooverlay}></div>
      </div>

      <div className={styles.contentscroll}>
        <div className="swcontainer">
          {/* SECTION 1 */}
          <div className={`${styles.section} ${styles.section1}`}>
            <div className={styles.heroGrid}>
              <div className={styles.heroTitle}>
                <h2 className={styles.heroH1}>
                  Compassion <br /> Meets Precision
                </h2>
              </div>

              <div></div>

              <div className={styles.heroButtons}>
                <Button href="/contactus" variant="filled" bgColor="#D6FDFF" textColor="#000">
                  Speak to our team
                </Button>

                <Button href='#keyproducts' textColor="#D6FDFF" borderColor="#B1F0E0">
                  Check out our Products
                </Button>
              </div>

              <div className={styles.heroGlass}>
                <div className={styles.glasscard}>
                  <p className={styles.pText}>
                    Intelligent, ethical healthcare AI that empowers caregivers,
                    elevates patient experience, and unites the entire ecosystem –{" "}
                    <span className={styles.neonGreen}>
                      providers, patients, payers, and pharma
                    </span>{" "}
                    – on one connected platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className={`${styles.section} ${styles.section2}`}>
            <div className={styles.section2Grid}>
              <div className={styles.section2Left}>
                <h2 className={styles.heroH1}>
                  A CONNECTED ECOSYSTEM FOR THE FUTURE OF CARE
                </h2>
                <p className={styles.pText}>
                  <span className={styles.neonGreen}>
                    Healthcare isn’t built in silos
                  </span>{" "}
                  — your technology shouldn’t be either.
                </p>
                {/* <Button
                  variant="filled"
                  bgColor="#008584"
                  textColor="#fff"
                >
                  Discover our verticals
                </Button> */}
              </div>

              <div className={styles.section2Right}>
                <h1 className={styles.pText}>
                  ARCA AI bridges the{" "}
                  <span className={styles.neonGreen}>
                    four pillars of healthcare
                  </span>{" "}
                  today with interoperable, human-centric intelligence:
                </h1>

                {/* ===============================
                    CHANGED: timeline wrapper + line
                =============================== */}
                <div ref={timelineWrapRef} className={styles.timeline}>
                  <span ref={timelineLineRef} className={styles.timelineLine}/>
                  
                  <div className={styles.timelineItem}>
                    <span className={styles.timelineDot}></span>
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineBadge}>Providers</span> – Reduce documentation load,
                      enhance clinical accuracy, and free clinicians to focus on
                      care.
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <span className={styles.timelineDot}></span>
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineBadge}>Patients</span> – Access personalised lifestyle
                      insights, preventive health tools, and long-term wellness
                      support.
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <span className={styles.timelineDot}></span>
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineBadge}>Payers</span> – Automate claims, detect fraud, and
                      gain real-time visibility across networks.
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <span className={styles.timelineDot}></span>
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineBadge}>Pharma</span> – Intelligence layer for drug discovery and clinical trials <span className={styles.comingsoon}>(coming soon)</span>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION 2 */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
