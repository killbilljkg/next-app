'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './AccordionItem.module.css';

export default function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  bgColor = '#ffffff',
  textColor = '#111111',
}) {
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(
    () => {
      if (!contentRef.current || !iconRef.current) return;

      if (isOpen) {
        gsap.to(contentRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.45,
          ease: 'power3.out',
        });

        gsap.to(iconRef.current, {
          rotate: 45,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });

        gsap.to(iconRef.current, {
          rotate: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <div className={styles.card} style={{ '--expanded-bg': bgColor, '--expanded-text': textColor, }} data-open={isOpen}>
      <button
        className={styles.header}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.title}>{title}</span>

        <span ref={iconRef} className={styles.icon}>
          <span className={styles.iconLine} />
          <span className={styles.iconLine} />
        </span>
      </button>

      <div ref={contentRef} className={styles.content}>
        <div className={styles.contentInner}>
          {children}
        </div>
      </div>

    </div>
  );
}
