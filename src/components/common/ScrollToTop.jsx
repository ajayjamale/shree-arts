import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      type='button'
      className={`${styles.scrollButton} ${isVisible ? styles.visible : ''}`.trim()}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label='Scroll to top'
    >
      ^
    </button>
  );
};

export default ScrollToTop;
