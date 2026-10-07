import QuoteCard from '../Components/QuoteCard/QuoteCard'
import { QuotesData } from './constants'
import styles from './Quotes.module.css'

function Quotes() {
  return (
    <section className={styles.Quotes}>
      <div className="swcontainer">
        <div className={styles.frame}>
            <div className={styles.sectionWrapper}>
                <h2 className={styles.title}> Brand & Leadership Quotes</h2>
                <div className={styles.grid}>
                    {QuotesData.map((item) => (
                    <QuoteCard
                        key={item.id}
                        quote={item.quote}
                        name={item.name}
                        role={item.role}
                        avatar={item.avatar}
                    />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Quotes