import { photographerPortfolioItems, photographerPortfolioStats } from '../../data/photographerPortfolio';
import { scrollToSection } from '../../utils/scroll';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import Button from '../common/Button';
import styles from './PhotographerPortfolioSection.module.css';

const PhotographerPortfolioSection = () => {
  return (
    <section id='photographer-portfolio' className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <Reveal className={styles.introPanel} direction='left'>
            <SectionTitle
              align='left'
              eyebrow='Photographer Portfolio'
              title='Rahul Patil Signature Frames'
              subtitle="A curated selection of the photographer's work style from wedding rituals to editorial portraits and premium commercial sets."
            />

            <p className={styles.summary}>
              Every frame is designed for emotion first, then refined through composition, lighting, and detail-driven post-processing.
            </p>

            <div className={styles.stats}>
              {photographerPortfolioStats.map((stat) => (
                <article key={stat.id} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </article>
              ))}
            </div>

            <Button variant='primary' onClick={() => scrollToSection('contact')}>
              Book This Photographer
            </Button>
          </Reveal>

          <div className={styles.projectGrid}>
            {photographerPortfolioItems.map((item, index) => (
              <Reveal key={item.id} className={styles.gridReveal} delay={index * 75}>
                <article className={styles.projectCard}>
                  <div className={styles.imageWrap}>
                    <img src={item.image} alt={item.title} loading='lazy' />
                  </div>
                  <div className={styles.projectBody}>
                    <span className={styles.projectMeta}>
                      {item.category} | {item.location}
                    </span>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                    <p className={styles.projectCopy}>{item.highlight}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PhotographerPortfolioSection;
