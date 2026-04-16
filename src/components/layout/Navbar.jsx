import { useEffect, useMemo, useState } from 'react';
import { siteData } from '../../data/siteData';
import { scrollToSection } from '../../utils/scroll';
import Container from '../common/Container';
import Button from '../common/Button';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const Navbar = ({ theme, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sectionIds = useMemo(() => siteData.navLinks.map((link) => link.id), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 14);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-42% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 1120) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeOnDesktop);

    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);

  const handleNavigate = (sectionId) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`.trim()}>
      <Container className={styles.navInner}>
        <a
          href='#home'
          className={styles.logoBlock}
          onClick={(event) => {
            event.preventDefault();
            handleNavigate('home');
          }}
        >
          <span className={styles.logoMark}>SA</span>
          <span className={styles.logoText}>{siteData.brandShort}</span>
        </a>

        <button
          type='button'
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label='Toggle navigation menu'
          aria-expanded={isMenuOpen}
        >
          <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
            {isMenuOpen ? <path d='M6 6l12 12M18 6L6 18' /> : <path d='M4 7h16M4 12h16M4 17h16' />}
          </svg>
        </button>

        <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`.trim()}>
          <ul className={styles.navList}>
            {siteData.navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type='button'
                  className={`${styles.navButton} ${activeSection === link.id ? styles.active : ''}`.trim()}
                  onClick={() => handleNavigate(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <Button className={styles.bookNowButton} variant='secondary' onClick={() => handleNavigate('contact')}>
              Book Now
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
