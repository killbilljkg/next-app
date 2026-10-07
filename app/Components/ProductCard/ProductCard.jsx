import Image from "next/image";
import styles from './ProductCard.module.css';
import Link from "next/link";

export default function ProductCard({
    icon,
    iconAlt = "",
    title,
    description,
    cardBg = "#111",
    textColor,
    href,
    ariaLabel,
    target = "_self"
}) {
  return (
    <Link className={styles.postThumb} href={href} aria-label={ariaLabel || title} target={target} style={{ "--card-bg": cardBg, "--text-color":textColor }}>
        {/* Icon */}
        <div className={styles.cardIcon}>
            <Image
              src={icon}
              alt={iconAlt || title}
              width={70}
              height={56}
            />
        </div>

        {/* Title */}
        <h3 className={styles.itemTitle}>
            {title}
        </h3>

        {/* Description */}
        <p className={styles.itemDesc}>
            <span className={styles.itemDescEL}>{description}</span>
        </p>
      
      <figure className={styles.itemBackground}></figure>
      
      <div className={styles.itemBtn}>
        <div className={styles.btnEl}>
          <i className={styles.btnIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="48" fill="none" viewBox="0 0 51 48">
              <path fill="currentColor" d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z"></path>
            </svg>
          </i>
        </div>
        <svg className={styles.btnBg} xmlns="http://www.w3.org/2000/svg" width="87" height="90" fill="none" viewBox="0 0 87 90">
          <path fill="#fff" d="M35.43 45.104 23.71 81.57A12.146 12.146 0 0 1 12.145 90C5.438 90 0 84.562 0 77.854V16C0 7.163 7.163 0 16 0h55c8.837 0 16 7.163 16 16v2c0 8.837-7.163 16-16 16H50.663a16 16 0 0 0-15.232 11.104Z"></path>
        </svg>
      </div>
    </Link >
  );
}