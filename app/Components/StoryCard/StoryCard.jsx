"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './StoryCard.module.css'
import Button from '../Button/Button'
import Img from '../../../public/testimonialsimage.webp'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function StoryCard() {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);

useGSAP(
    () => {
        const cards = cardsRef.current;

        gsap.set(cards, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        });

        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: () => `+=${cards.length * window.innerHeight * 0.9}`, // 🔹 slightly shorter
            scrub: 1, // 🔹 smooth catch-up instead of true scrub
            pin: true,
        },
        });

        cards.forEach((card, i) => {
        if (i === 0) return;

        tl.fromTo(
            card,
            {
            yPercent: 110,      // 🔹 start a bit lower
            },
            {
            yPercent: 0,
            ease: "power2.out", // 🔹 natural deceleration
            duration: 1,
            },
            i - 0.3              // 🔹 overlap timelines
        );
        });
    },
    { scope: wrapperRef }
    );


  return (
    <>
        <section ref={wrapperRef} className={styles.wrapper}>
                <section ref={(el) => (cardsRef.current[0] = el)} className={styles.storycard}>
                    <div className="swcontainer">
                        <div className={styles.storygrid}>
                        <h1 className={styles.cardTitle}>Story</h1>

                        <div className={styles.storyflex}>
                            <div className={styles.leftinfo}>
                            <p className={`${styles.cardDesc} ${styles.highlight}`}>A healthcare system that listens first</p>
                            <p className={styles.cardDesc}>
                                <strong>The Digital Ark of Anno-Domini : </strong> Arca is the ark which sails in the
                                flood of digital data similar to Noah’s Ark that survived the great flood.
                            </p>
                            <p className={styles.cardDesc}>
                                Healthcare has long struggled with fragmented data, complex workflows,
                                and burnout.
                            </p>
                            <p className={styles.cardDesc}>
                                ARCA AI was created to bring simplicity, connection,
                                and humanity back to care.
                            </p>
                            <Button href='/about#our-story' variant="filled" bgColor="#008584" textColor="#fff">
                                Our Story
                            </Button>
                                
                            </div>

                            <div className={styles.rightimg}>
                            <div className={styles.imageWrap}>
                            <Image
                                src='/Story/Story3.webp'
                                alt="Vision visual"
                                fill
                                priority
                            />
                            </div>

                            <p className={styles.cardDesc}>
                                Rooted in medical ethics and built with proprietary intelligence,
                                ARCA enables a shift from reactive treatment to proactive,
                                preventive, lifestyle-driven healthcare
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section ref={(el) => (cardsRef.current[1] = el)} className={styles.visioncard}>
                    <div className="swcontainer">
                        <div className={styles.visiongrid}>
                            <div className={styles.visionflex}>
                                <h1 className={styles.cardTitle}>Vision</h1>
                                <div className={styles.descwrap}>
                                    <p className={styles.cardDesc}>
                                    To be a compelling force in creating a symbiotic ecosystem where
                                    AI & human wisdom unite to preserve moral values and collective intelligence
                                    </p>
                                </div>
                            </div>

                            <div className={styles.visionimg}>
                                <video
                                className={styles.video}
                                src="/Videos/Vision_video3.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section ref={(el) => (cardsRef.current[2] = el)} className={styles.missioncard}>
                    <div className="swcontainer">
                        <div className={styles.missiongrid}>
                            <div className={styles.missionflex}>
                                <h1 className={`${styles.cardTitle} ${styles.missionTitle}`}>Mission</h1>
                                <div className={styles.descwrap}>
                                    <p className={`${styles.cardDesc} ${styles.missionDesc}`}>
                                    To bring in empathy, ethical clarity, efficiency and precision to
                                    healthcare providers by enabling smarter collaboration between
                                    providers, patients, payers and pharma.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.missionimg}>
                                <Image
                                    src='/Story/mission.webp'
                                    alt="Mission visual"
                                    fill
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
        </section>
    </>
  )
}

export default StoryCard
