import styles from './StarRating.module.css';

const StarRating = ({ value = 5 }) => {
  return (
    <div className={styles.stars} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: value }, (_, index) => (
        <svg
          key={`star-${index}`}
          className={styles.starIcon}
          viewBox='0 0 24 24'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M12 2.5l2.85 5.77 6.36.92-4.6 4.48 1.09 6.33L12 17l-5.7 2.99 1.09-6.33-4.6-4.48 6.36-.92L12 2.5Z' />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
