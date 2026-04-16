import { photographer } from '../../data/photographers';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import Button from '../common/Button';
import SocialIconLinks from '../common/SocialIconLinks';
import { scrollToSection } from '../../utils/scroll';
import styles from './TeamSection.module.css';

const TeamSection = () => {
  return (
    <section id='photographers'>
      <Container>
        <SectionTitle
          eyebrow='Our Photographer'
          title='The creative eye behind every frame.'
          subtitle='A dedicated photographer blending direction, timing, and storytelling for premium results.'
        />

        <Reveal>
          <article className={styles.profile}>
            <div className={styles.imageWrap}>
              <img src={photographer.image} alt={photographer.name} loading='lazy' />
            </div>

            <div className={styles.details}>
              <span className={styles.role}>{photographer.role}</span>
              <h3 className={styles.name}>{photographer.name}</h3>
              <p className={styles.meta}>{photographer.experience} Experience</p>
              <p className={styles.bio}>{photographer.bio}</p>

              <div className={styles.actions}>
                <SocialIconLinks links={photographer.social} />
                <Button variant='ghost' onClick={() => scrollToSection('photographer-portfolio')}>
                  View Portfolio
                </Button>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
};

export default TeamSection;
