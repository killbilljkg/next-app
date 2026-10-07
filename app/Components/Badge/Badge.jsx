import styles from './Badge.module.css'

export default function Badge({
    children,
    bgColor,
    textColor
}) {
    
  return (
    <div
      className={styles.badge}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {children}
    </div>
  )
}
