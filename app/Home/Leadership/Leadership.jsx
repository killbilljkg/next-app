import React from 'react'
import styles from './Leadership.module.css'
import { leadershipData } from './leadershipdata'
import Button from '@/app/Components/Button/Button'
import FinalCta from '@/app/Components/FinalCta/FinalCta'
import LeadershipCards from '@/app/Components/Leadership/LeadershipCard'

function Leadership() {
  return (
        <section className={styles.Leadership}>
          <div className="swcontainer">
            <div className={styles.sectionWrapper}>
                <h2 className={styles.title}>Leadership grounded in <br /> expertise and empathy</h2>
                <p className={styles.description}>
                    ARCA AI is founded by seasoned professionals from healthcare, AI, and enterprise technology - united by a belief that intelligence must serve humanity, not replace it.
                </p>
    
                <div className={styles.leaderssection}>
                  <div className={styles.grid}>
                    {leadershipData.map((leader, index) => {
                      const isCenterCard = index % 3 === 1;

                      return (
                        <LeadershipCards
                          key={leader.id}
                          image={leader.image}
                          name={leader.name}
                          designation={leader.designation}
                          description={leader.description}
                          isFeatured={isCenterCard}
                        />
                      );
                    })}
                  </div>
                </div>
    
                <Button href='/about#team' variant="filled" bgColor="#D6FDFF" textColor="#111">
                  Meet The leadership
                </Button>

                <div className={styles.ctasection}>
                  <FinalCta />
                </div>

            </div>
          </div>
        </section>
  )
}

export default Leadership