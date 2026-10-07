import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  variant = "outline", // outline | filled
  size = "md",         // sm | md | lg
  bgColor,
  textColor,
  borderColor,
  onClick,
  className = "",
}) {

  if (href) {
    return (
      <Link
      href={href}
      onClick={onClick}
      style={{
        ...(bgColor && { "--btn-bg": bgColor }),
        ...(textColor && { "--btn-text": textColor }),
        ...(borderColor && { "--btn-border": borderColor }),
      }}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${className}
      `}
    >
      {children}
    </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{
        ...(bgColor && { "--btn-bg": bgColor }),
        ...(textColor && { "--btn-text": textColor }),
        ...(borderColor && { "--btn-border": borderColor }),
      }}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
