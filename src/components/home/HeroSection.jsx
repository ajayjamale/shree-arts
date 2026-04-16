import { useEffect, useState } from 'react';
import { siteData } from '../../data/siteData';
import { scrollToSection } from '../../utils/scroll';
import Container from '../common/Container';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import styles from './HeroSection.module.css';

const rotatingWords = ['Weddings', 'Portraits', 'Events', 'Brands'];

const HeroSection = () => {
  const { hero, brandFull } = siteData;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((previous) => (previous + 1) % rotatingWords.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id='home' className={styles.heroSection}>
      <Container className={styles.heroGrid}>
        <Reveal className={styles.content}>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.title}>
            {brandFull}
            <span className={styles.wordSwap}>for {rotatingWords[wordIndex]}</span>
          </h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>

          <div className={styles.actions}>
            <Button onClick={() => scrollToSection(hero.primaryCta.targetId)}>{hero.primaryCta.label}</Button>
            <Button variant='secondary' onClick={() => scrollToSection(hero.secondaryCta.targetId)}>
              {hero.secondaryCta.label}
            </Button>
            <Button variant='ghost' onClick={() => scrollToSection(hero.tertiaryCta.targetId)}>
              {hero.tertiaryCta.label}
            </Button>
          </div>

          <ul className={styles.stats}>
            {hero.stats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction='right'>
          <figure className={styles.mediaCard}>
            <img src={hero.heroImage} alt='Shree Arst studio hero visual' />
            <figcaption className={styles.badge}>Premium Cinematic Storytelling</figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
};

export default HeroSection;
