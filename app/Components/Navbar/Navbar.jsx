"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Logo from "@/public/logo white.png";
import BlackLogo from "@/public/Logo/Black_logo.png";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";
import { usePathname } from "next/navigation";



// Register plugin (good practice in Next.js)
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {

  const pathname = usePathname();
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };


  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Products",
      children: [
        { label: "Payer", href: "/product/payer" },
        { label: "Provider", href: "/product/provider" },
      ],
    },
    { label: "Press", href: "/press" },
    // { label: "Contact Us", href: "/contactus" },
    { label: "Blog", href: "/blogs" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs
  const containerRef = useRef(null); // Scope for useGSAP
  const menuRef = useRef(null);
  const menuLinksRef = useRef([]);
  const tl = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useGSAP(() => {

    ScrollTrigger.create({
      start: 3,
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
      duration: 2,
    });
    // 1. Initial Setups
    // gsap.set(menuRef.current, { yPercent: -110 });
    // gsap.set(menuLinksRef.current, { y: 20, opacity: 0 });

    // 2. Create Timeline
    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
      onStart: () => {
        // Ensure pointer events are active when animation starts
        if(menuRef.current) menuRef.current.style.pointerEvents = "auto";
      },
      onReverseComplete: () => {
        // Disable pointer events when closed so clicks pass through
        if(menuRef.current) menuRef.current.style.pointerEvents = "none";
      },
    });

    tl.current
      .to(menuRef.current, {
        y: 0,
        duration: 0.6,
      })
      .to(
        menuLinksRef.current,
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(
        ".menuFooter",
        {
          y:0,
          opacity:1
        }
      );
  }, { scope: containerRef }); // Scope ensures clean up automatically

  // 3. Control Timeline via Effect
  useEffect(() => {
    if (!tl.current) return;
    
    if (menuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [menuOpen]);

  const mobileLinks = NAV_LINKS.flatMap((item) => {
    if (item.children) {
      return item.children;
    }
    return item;
  });


  return (
    <>
      <nav className={styles.navbar}>
        <div className={`${styles.desktopLogoPill} ${isScrolled ? styles.Logopill : ""}`}>
            <Link href="/" aria-label="Go to homepage">
              <div className={styles.logoGroup}>
                <Image
                  src={isScrolled ? BlackLogo : Logo}
                  alt="Arca Ai"
                  priority
                />
              </div>
            </Link>
        </div>

        <div className={`${styles.pill} ${styles.desktopNavPill}`}>
          {NAV_LINKS.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className={styles.dropdown}>
                  <span className={`${styles.navLink} ${item.children.some(child => isActive(child.href)) ? styles.activeLink : ""}`}>
                    {item.label}
                  </span>

                  <div className={styles.dropdownMenu}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`${styles.dropdownItem} ${isActive(child.href) ? styles.activeDropdownItem : ""}`}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.activeLink : ""}`}>
                {item.label}
              </Link>
            );
          })}

          <Link href="/contactus" className={styles.ctaButton}>
            Request A Demo
          </Link>
        </div>
        
        <div className={`${styles.pill} ${styles.mobilePill}`}>
            <Link href="/" aria-label="Go to homepage">
              <div className={styles.logoGroup}>
                <Image
                  src={BlackLogo}
                  alt="Arca Ai"
                />
              </div>
            </Link>
           
           <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <div ref={menuRef} className={styles.mobileMenu}>

                  {/* Background Abstract Pattern */}
          <div className={styles.overlayBackground}>
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 20 Q 50 80 100 20" stroke="white" strokeWidth="0.5" fill="none" />
               <path d="M0 50 Q 50 110 100 50" stroke="white" strokeWidth="0.5" fill="none" />
               <path d="M0 80 Q 50 140 100 80" stroke="white" strokeWidth="0.5" fill="none" />
               <circle cx="20" cy="20" r="40" stroke="white" strokeWidth="0.5" fill="none" />
               <circle cx="80" cy="80" r="40" stroke="white" strokeWidth="0.5" fill="none" />
             </svg>
          </div>
        <div className={styles.menuLinks}>
          {/* {NAV_LINKS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => (menuLinksRef.current[i] = el)}
              className={styles.menuLinkItem}
              onClick={() => setMenuOpen(false)} // 👈 close menu on click
            >
              {item.label}
            </Link>
          ))} */}
          {mobileLinks.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => (menuLinksRef.current[i] = el)}
              className={`${styles.menuLinkItem} ${
                isActive(item.href) ? styles.activeMenuLink : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contactus"
            ref={(el) => (menuLinksRef.current[mobileLinks.length] = el)}
            className={styles.menuLinkItem}
            onClick={() => setMenuOpen(false)}
          >
            Request A Demo
          </Link>
        </div>


        <div className={styles.menuFooter}>
          <Link href="mailto:hello@arcaai.com" className={styles.emailLink}>
            hello@arcaai.com
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;