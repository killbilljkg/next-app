import styles from './AboutArca.module.css'

function AboutArca() {
  return (
    <div className={styles.sectionwrapper}>
        <div className="swcontainer">
            <div className={styles.aboutgrid}>
                <h2 className={styles.title}>
                    About ArcaAi
                </h2>
                <div className={styles.aboutflex}>
                    <div className={styles.bodyText}>
                        <p className={styles.description}>
                            ARCA AI is a value-conscious healthcare intelligence company building ethical, practical, and human-centered AI systems for providers, patients, payers, and pharma.
                        </p>
                        <p className={styles.description}>
                            Our solutions connect the healthcare ecosystem through intelligent ambient listening, structured clinical documentation, lifestyle EHRs, claims verification, and advanced analytics — helping the world transition from reactive care to proactive, preventive, lifestyle-driven healthcare.
                        </p>
                    </div>
                    <div className={styles.aboutright}>
                        <p>Designed by clinicians.</p>
                        <p className={styles.boldtext}>Built with scientific rigor.</p>
                        <p className={styles.boldtext}>Engineered for real-world adoption.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutArca