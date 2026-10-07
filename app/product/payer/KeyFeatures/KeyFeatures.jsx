"use client";

import React, { useState } from "react";
import { FEATURES } from "./constants.js";
import styles from "./KeyFeatures.module.css";
import AccordionItem from "../Components/Accordian/AccordianItem.jsx";

function KeyFeatures() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.layout}>
          
          {/* Left Column */}
          <div className={styles.left}>
            <h1 className={styles.heading}>
              <span>KEY</span>
              <span className={styles.headingOffset}>FEATURES</span>
            </h1>

            <div className={styles.divider}></div>
          </div>

          {/* Right Column */}
          <div className={styles.right}>
            <div className={styles.accordionWrapper}>
              {FEATURES.map((feature, index) => (
                <AccordionItem
                  key={feature.id}
                  item={feature}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default KeyFeatures;
