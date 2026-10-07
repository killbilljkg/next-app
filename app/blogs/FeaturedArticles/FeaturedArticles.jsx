'use client'

import styles from './FeaturedArticles.module.css'
import BlogCard from '../Components/BlogCard/BlogCard'
// import blogCards from './blogCards'
import blogCardPresets from './blogCardPresets';
import { useEffect, useState } from 'react';
import ShapedButton from '@/app/Components/ShapedButton/ShapedButton';


const ITEMS_PER_PAGE = 6;

function FeaturedArticles({ cards }) {

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [activeCategory, setActiveCategory] = useState('All');

  // 🔹 derive categories dynamically
  const categories = [
    'All',
    ...Array.from(new Set(cards.flatMap((c) => c.categories))),
  ];

  // 🔹 filter cards
  const filteredCards =
    activeCategory === 'All'
      ? cards
      : cards.filter((card) =>
          card.categories.includes(activeCategory)
        );

  // 🔹 reset pagination on filter change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  const handleToggle = () => {
    if (visibleCount >= cards.length) {
      setVisibleCount(ITEMS_PER_PAGE);
    } else {
      setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    }
  };


  const isAllVisible = visibleCount >= cards.length;
  return (
    <section className={styles.FeaturedArticles} id='featuredarcticle'>
      <div className="swcontainer">
        <div className={styles.sectionWrapper}>
            <h2 className={styles.title}>Featured Articles</h2>

            {/* CATEGORY FILTER */}
            <div className={styles.categoryFilter}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterButton} ${
                    activeCategory === cat ? styles.active : ''
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.blogGrid}>
              {filteredCards.slice(0, visibleCount).map((card, index) => {
                const preset =
                  blogCardPresets[index % blogCardPresets.length];

                return (
                  <BlogCard
                    key={card.id}
                    description={card.description}
                    slug={card.slug}
                    category={card.categories[0]}
                    date={card.date}
                    cardBg={preset.cardBg}
                    textColor={preset.textColor}
                  />
                );
              })}
            </div>

            {/* Button */}
          {/* {cards.length > ITEMS_PER_PAGE && (
            <div className={styles.buttonWrapper}>
              <button
                className={styles.toggleButton}
                onClick={handleToggle}
              >
                {isAllVisible ? 'Show less' : 'Show more'}
              </button>
              <ShapedButton
                label={isAllVisible ? "Show less" : "Show more"}
                onClick={handleToggle}
              />
            </div>    
          )} */}

          {/* SHOW MORE / LESS */}
          {filteredCards.length > ITEMS_PER_PAGE && (
            <div className={styles.buttonWrapper}>
              <button
                className={styles.toggleButton}
                onClick={handleToggle}
              >
                {isAllVisible ? 'Show less' : 'Show more'}
              </button>
              {/* <ShapedButton
                label={isAllVisible ? 'Show less' : 'Show more'}
                onClick={handleToggle}
              /> */}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles


