"use client";

import React, { useRef } from "react";
import styles from "./PartnerCarousel.module.css";
import { PartnerCard } from "../PartnerCard/PartnerCard";
import { PARTNERS } from "./constants";

export default function PartnerCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const containerWidth = scrollRef.current.offsetWidth;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -containerWidth : containerWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.carouselWrap}>
        <div className={styles.wrapper}>
        <div ref={scrollRef} className={styles.carousel}>
          {PARTNERS.map((partner) => (
            <div key={partner.id} className={styles.item}>
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
              <div className={styles.controlsWrap}>
        <button
          onClick={() => scroll("left")}
          className={styles.arrowBtn}
          aria-label="Scroll left"
        >
          <svg viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          className={styles.arrowBtn}
          aria-label="Scroll right"
        >
          <svg viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
        </div>
        
      </div>


    </section>

  );
}
