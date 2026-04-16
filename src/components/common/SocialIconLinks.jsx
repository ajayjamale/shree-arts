import styles from './SocialIconLinks.module.css';

const iconPaths = {
  instagram:
    'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm6.2-3.3a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z',
  facebook:
    'M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H17V5a24 24 0 0 0-2.8-.2c-2.8 0-4.7 1.7-4.7 4.8V11H7v3h2.5v8h4Z',
  linkedin:
    'M5.3 8.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-1.7 2H7v10H3.6v-10ZM10 10.3h3.1v1.4h.1c.4-.8 1.5-1.7 3.2-1.7 3.4 0 4 2.2 4 5.2v5.1h-3.4v-4.5c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3v4.6H10v-10Z',
  youtube:
    'M23 8.5a3 3 0 0 0-2.1-2.1C19 6 12 6 12 6s-7 0-8.9.4A3 3 0 0 0 1 8.5 31 31 0 0 0 .6 12c0 1.2.1 2.4.4 3.5a3 3 0 0 0 2.1 2.1C5 18 12 18 12 18s7 0 8.9-.4a3 3 0 0 0 2.1-2.1c.3-1.1.4-2.3.4-3.5s-.1-2.4-.4-3.5ZM9.7 15.3V8.7l5.8 3.3-5.8 3.3Z',
  behance:
    'M8.3 11.4c1 .3 1.8 1.2 1.8 2.7 0 2.1-1.5 3.4-4 3.4H0V6h5.8c2.4 0 3.8 1.1 3.8 3.1 0 1.3-.6 2.1-1.3 2.3ZM3 8.4v2h2.3c.8 0 1.2-.3 1.2-1 0-.7-.4-1-1.2-1H3Zm2.5 6.7c1 0 1.5-.4 1.5-1.2 0-.8-.5-1.2-1.5-1.2H3v2.4h2.5Zm9.2-8.8h4.5v1.2h-4.5V6.3Zm6.6 7.8h-6.1c.1 1.1.7 1.8 1.9 1.8.8 0 1.4-.3 1.7-.9h2.4c-.5 1.8-2.1 2.9-4.1 2.9-2.8 0-4.7-1.8-4.7-4.6 0-2.8 2-4.6 4.6-4.6 2.8 0 4.4 2 4.4 4.9 0 .2 0 .4-.1.5Zm-6-1.6H19c-.1-1-.7-1.6-1.7-1.6-1.1 0-1.7.6-1.9 1.6Z',
};

const SocialIconLinks = ({ links }) => {
  return (
    <ul className={styles.socialList}>
      {Object.entries(links).map(([network, href]) => (
        <li key={network}>
          <a
            className={styles.iconLink}
            href={href}
            target='_blank'
            rel='noreferrer'
            aria-label={network}
          >
            <svg className={styles.icon} viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
              <path d={iconPaths[network]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIconLinks;
