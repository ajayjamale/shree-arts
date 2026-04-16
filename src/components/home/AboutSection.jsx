import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import { siteData } from '../../data/siteData';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const { about } = siteData;

  return (
    <section id='about'>
      <Container>
        <SectionTitle
          eyebrow='About Us'
          title='Creative legacy with premium execution.'
          subtitle='We combine story-led photography and cinematic direction with efficient studio operations to deliver polished results for every project.'
        />

        <div className={styles.aboutGrid}>
          <Reveal direction='left'>
            <figure className={styles.media}>
              <img src={about.image} alt='Inside Shree Arst photo studio' />
            </figure>
          </Reveal>

          <Reveal className={styles.content}>
            <h3>{about.heading}</h3>
            <p>{about.story}</p>
            <p>{about.mission}</p>

            <ul className={styles.achievements}>
              {about.achievements.map((item) => (
                <li key={item}>
                  <span className={styles.dot} aria-hidden='true' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
