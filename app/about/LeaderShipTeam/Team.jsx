import FinalCta from '@/app/Components/FinalCta/FinalCta'
import LeadershipCards from '@/app/Components/Leadership/LeadershipCard'
import React from 'react'
import styles from './team.module.css'
import { leadershipData } from './leadershipdata'

async function getLeadershipTeam() {
  try {
    const res = await fetch(
      'https://cms.arcaai.com/wp-json/wp/v2/leadership-team?_embed',
      {
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) throw new Error('Failed to fetch');

    const data = await res.json();

    data.sort((a, b) => a.menu_order - b.menu_order);


    return data;
  } catch (error) {
    console.error('WP fetch failed, using fallback:', error);
    return null;
  }
}

function normalizeLeaders(wpData) {
  if (!Array.isArray(wpData)) return leadershipData;

  return wpData.map((item, index) => ({
    id: item.id,
    name: item.title?.rendered || leadershipData[index]?.name,
    designation: item.acf?.designation || leadershipData[index]?.designation,
    description: item.acf?.description || leadershipData[index]?.description,
    image:
      item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
      leadershipData[index]?.image,
  }));
}

export default async function Team() {
  const wpData = await getLeadershipTeam();
  const leaders = normalizeLeaders(wpData);
    
  return (
        <section className={styles.TeamSection} id="team">
          <div className="swcontainer">
            <div className={styles.sectionWrapper}>
                <h2 className={styles.title}>Leadership Team</h2>
                <p className={styles.description}>
                    ARCA AI is led by experts across healthcare, enterprise technology, data science, and public health.
                </p>
                <p className={styles.description}>
                    Together, they bring more than 150 years of combined experience in building trustworthy, scalable, and clinically meaningful systems.
                </p>
    
                <section className={styles.leaderssection}>
                  <div className={styles.grid}>
                    {leaders.map((leader, index) => {
                      const isCenterCard = index % 3 === 1;

                      return (
                        <LeadershipCards
                          key={leader.id}
                          image={leader.image}
                          name={leader.name}
                          description={leader.description}
                          designation={leader.designation}
                          isFeatured={isCenterCard}
                        />
                      );
                    })}
                  </div>
                </section>

                <div className={styles.ctasection}>
                  <FinalCta />
                </div>

            </div>
          </div>
        </section>
  )
}
