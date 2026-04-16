import styles from './SectionTitle.module.css';

const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? styles.alignLeft : '';

  return (
    <header className={`${styles.headingBlock} ${alignClass}`.trim()}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  );
};

export default SectionTitle;
