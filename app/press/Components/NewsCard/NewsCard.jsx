import styles from './NewsCard.module.css'

function NewsCard({title, description}) {
  return (
    <div className={styles.card}>
      <p className={styles.description}>{description}</p>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}

export default NewsCard