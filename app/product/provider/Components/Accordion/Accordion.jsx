'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AccordionItem from './AccordionItem';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(
        containerRef.current.children,
        {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.12,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          bgColor={item.bgColor}
          textColor={item.textColor}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
