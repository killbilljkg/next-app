import styles from './AnnouncementCard.module.css'

function AnnouncementCard({title, description, bgColor = "#e6eadf", textColor = "#111", }) {
  return (
    <div className={styles.card} style={{
        backgroundColor: bgColor,
        color: textColor,
      }}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default AnnouncementCard