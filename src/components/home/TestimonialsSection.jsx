import { useEffect, useState } from 'react';
import { testimonials } from '../../data/testimonials';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import StarRating from '../common/StarRating';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id='testimonials'>
      <Container>
        <SectionTitle
          eyebrow='Testimonials'
          title='Stories from happy clients and brands.'
          subtitle='Our process is collaborative, transparent, and tailored. Here is what clients say after working with our team.'
        />

        <Reveal className={styles.sliderWrap}>
          <article className={styles.card} key={activeTestimonial.id}>
            <header className={styles.header}>
              <div className={styles.profile}>
                <div className={styles.avatar}>
                  <img src={activeTestimonial.image} alt={activeTestimonial.name} loading='lazy' />
                </div>
                <div>
                  <p className={styles.name}>{activeTestimonial.name}</p>
                  <span className={styles.event}>{activeTestimonial.event}</span>
                </div>
              </div>
              <StarRating value={activeTestimonial.rating} />
            </header>
            <p className={styles.review}>{activeTestimonial.review}</p>
          </article>

          <div className={styles.dots}>
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type='button'
                className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`.trim()}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
