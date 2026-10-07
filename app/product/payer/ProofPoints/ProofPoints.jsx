import React from 'react'
import styles from './ProofPoints.module.css'
import { ProofPointsData } from './constants'
import IconBox from '@/app/Components/IconBox/IconBox'

function ProofPoints() {
  return (
        <section className={styles.ProofPoints}>
            <div className="swcontainer">
                <div className={styles.sectionWrapper}>
                    <h2 className={styles.title}>Proof Points</h2>
                    <p className={styles.description}> TrueClaim is engineered on ARCA’s ecosystem capabilities validated across large hospitals and health systems.</p>
                    <div className={styles.grid}>
                        {ProofPointsData.map((item) => (
                            <IconBox
                                key={item.id}
                                icon={item.icon}
                                bgColor={item.bgColor}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ProofPoints