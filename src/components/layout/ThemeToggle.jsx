import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type='button'
      className={styles.toggle}
      onClick={onToggle}
      aria-label='Toggle dark mode'
      title='Toggle theme'
    >
      {isDark ? (
        <svg className={styles.icon} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
          <path d='M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42' />
          <circle cx='12' cy='12' r='4.5' />
        </svg>
      ) : (
        <svg className={styles.icon} viewBox='0 0 24 24' fill='currentColor'>
          <path d='M20.9 14.1A9 9 0 1 1 9.9 3.1a7 7 0 1 0 11 11Z' />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
