import NewsCard from '../Components/NewsCard/NewsCard'
import { NewsData } from './NewsData'
import styles from './News.module.css'

function News() {
  return (
    <section className={styles.News}>
      <div className="swcontainer">
        <div className={styles.sectionWrapper}>
            <h2 className={styles.title}>In The<span className={styles.boldtext}> News</span></h2>
            <div className={styles.grid}>
                {NewsData.map((item) => (
                <NewsCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default News