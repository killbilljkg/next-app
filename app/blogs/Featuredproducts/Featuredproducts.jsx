import React from 'react'
import styles from './Featuredproducts.module.css'
import { FeaturedProducts } from './constants';
import BenefitsCard from '@/app/Components/BenefitsCard/BenefitsCard';

function Featuredproducts() {
  return (
    <section className={styles.Products}>
        <div className="swcontainer">
            <div className={styles.sectionWrapper}>
                <h2 className={styles.title}></h2>
                <div className={styles.grid}>
                    {FeaturedProducts.map((item) => (
                        <BenefitsCard
                            key={item.id}
                            number={item.number}
                            title={item.title}
                            description={item.description}
                            bgColor={item.bgColor}
                            textColor={item.textColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featuredproducts