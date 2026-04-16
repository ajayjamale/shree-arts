import { highlights } from '../../data/highlights';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import styles from './HighlightsSection.module.css';

const HighlightsSection = () => {
  return (
    <section id='highlights'>
      <Container>
        <SectionTitle
          eyebrow='Why Choose Us'
          title='Studio systems built for quality and confidence.'
          subtitle='We combine creative direction, premium equipment, and a reliable delivery workflow so you can focus on your event while we handle the visuals.'
        />

        <div className={styles.grid}>
          {highlights.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <article className={styles.card}>
                <div className={styles.iconWrap}>
                  <img src={item.icon} alt={item.title} loading='lazy' />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HighlightsSection;
