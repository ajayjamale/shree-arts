import { useState } from 'react';
import { faqItems } from '../../data/faq';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import styles from './FAQSection.module.css';

const FAQSection = () => {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? null);

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id='faq'>
      <Container>
        <SectionTitle
          eyebrow='FAQ'
          title='Everything you may want to know.'
          subtitle='Answers to common booking, delivery, and customization questions before your shoot begins.'
        />

        <Reveal className={styles.accordion}>
          {faqItems.map((faq) => {
            const isOpen = faq.id === openId;

            return (
              <article key={faq.id} className={styles.item}>
                <button type='button' className={styles.question} onClick={() => toggleItem(faq.id)}>
                  <span>{faq.question}</span>
                  <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
                </button>
                <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`.trim()}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
};

export default FAQSection;
