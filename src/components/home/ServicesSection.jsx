import { services } from '../../data/services';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  return (
    <section id='services'>
      <Container>
        <SectionTitle
          eyebrow='Services'
          title='Designed for every meaningful moment.'
          subtitle='From wedding ceremonies to product campaigns, our service stack adapts to your story, style, and output goals.'
        />

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 70}>
              <article className={styles.card}>
                <div className={styles.media}>
                  <img src={service.image} alt={service.title} loading='lazy' />
                </div>
                <div className={styles.content}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
