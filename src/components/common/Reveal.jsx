import { useReveal } from '../../hooks/useReveal';
import styles from './Reveal.module.css';

const Reveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const { targetRef, isVisible } = useReveal();

  return (
    <div
      ref={targetRef}
      className={`${styles.reveal} ${direction === 'left' ? styles.left : ''} ${
        direction === 'right' ? styles.right : ''
      } ${isVisible ? styles.visible : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
