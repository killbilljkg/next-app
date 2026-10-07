import AnnouncementCard from '../Components/AnnouncementCard/AnnouncementCard'
import styles from './Announcements.module.css'
import { AnnouncementsData } from './constants'

function Announcements() {
  return (
    <section className={styles.Announcements}>
      <div className="swcontainer">
        <div className={styles.frame}>
            <div className={styles.sectionWrapper}>
                <h2 className={styles.title}>Latest<span className={styles.boldtext}>Announcements</span></h2>
                <div className={styles.grid}>
                    {AnnouncementsData.map((item) => (
                    <AnnouncementCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        bgColor={item.bgColor}
                        textColor={item.textColor}
                    />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Announcements