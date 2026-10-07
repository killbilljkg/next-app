import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import styles from "./Accordion.module.css";

function AccordionItem({ item, isOpen, onClick }) {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const arrow = arrowRef.current;

    if (!content || !arrow) return;

    // Kill existing tweens (important when toggling fast)
    gsap.killTweensOf([content, arrow]);

    if (isOpen) {
      gsap.to(content, {
        height: "auto",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(arrow, {
        rotation: 180,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

      gsap.to(arrow, {
        rotation: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className={styles.accordionItem}>
      <button className={styles.header} onClick={onClick} aria-expanded={isOpen}>
        <div className={styles.left}>
          <span className={styles.number}>{item.number}</span>
          <h3 className={styles.title}>{item.title}</h3>
        </div>

        <div className={styles.arrow} ref={arrowRef}>
          <ArrowDown size={20} strokeWidth={1} />
        </div>
      </button>

      <div ref={contentRef} className={styles.content}>
        <div className={styles.contentInner}>
          <p className={styles.description}>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
