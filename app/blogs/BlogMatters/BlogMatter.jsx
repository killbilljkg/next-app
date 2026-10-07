import styles from './BlogMatter.module.css'

function BlogMatter() {
  return (
    <section className={styles.SectionPadding}>
    <div className={styles.BlogMatter}>
      <div className="swcontainer">
        <div className={styles.flex}>
        <section className={styles.section}>
          <div className={styles.grid}>
            <h2 className={styles.cardTitle}>Why Our Blog Matters</h2>

            <div className={styles.missionGrid}>
              <div className={styles.missionLeft}>
                <p className={styles.missionIntro}>
                  This is not just content - it’s a knowledge hub for the future of intelligent healthcare.
                </p>
              </div>

              <div className={styles.missionRight}>
                <ul className={styles.missionList}>
                  <li className={styles.missionItem}>
                    <span className={styles.iconWrap}>
                      <img src="/Icons/blog1.png" alt="Research-backed writing from clinicians, scientists, and engineers" />
                    </span>
                    <span className={styles.text}>Research-backed writing from clinicians, scientists, and engineers</span>
                  </li>
                  <li className={styles.missionItem}>
                    <span className={styles.iconWrap}>
                      <img src="/Icons/blog2.png" alt="Clear, jargon-free explanations of complex healthcare technology" />
                    </span>
                    <span className={styles.text}>Clear, jargon-free explanations of complex healthcare technology</span>
                  </li>

                  <li className={styles.missionItem}>
                    <span className={styles.iconWrap}>
                      <img src="/Icons/blog3.png" alt="Practical guidance for hospitals, payers, and public-health programs" />
                    </span>
                    <span className={styles.text}>Practical guidance for hospitals, payers, and public-health programs</span>
                  </li>

                  <li className={styles.missionItem}>
                    <span className={styles.iconWrap}>
                      <img src="/Icons/blog4.png" alt="Focus on compassion, equity, and responsible innovation" />
                    </span>
                    <span className={styles.text}>Focus on compassion, equity, and responsible innovation</span>
                  </li>

                  <li className={styles.missionItem}>
                    <span className={styles.iconWrap}>
                      <img src="/Icons/blog5.png" alt="Insights shaped by hands-on experience in real hospitals and communities" />
                    </span>
                    <span className={styles.text}>Insights shaped by hands-on experience in real hospitals and communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </div>

      </div>
    </div>
    </section>
  )
}

export default BlogMatter