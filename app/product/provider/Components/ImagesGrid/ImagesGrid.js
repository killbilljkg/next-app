import styles from './ImagesGrid.module.css';

export default function ImagesGrid({ images }) {
  return (
    <div className={styles.grid}>
      {images.map((img, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            src={img.src}
            alt={img.alt || ''}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
