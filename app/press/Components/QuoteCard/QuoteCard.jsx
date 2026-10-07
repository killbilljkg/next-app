import Image from "next/image";
import styles from './QuoteCard.module.css'

function QuoteCard( { quote, name, role, avatar }) {
  return (
    <article className={styles.card}>
      <p className={styles.quote}>“{quote}”</p>

      <div className={styles.author}>
        <div className={styles.avatarWrap}>
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="40px"
            className={styles.avatar}
          />
        </div>

        <div className={styles.authorText}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </article>
  )
}

export default QuoteCard