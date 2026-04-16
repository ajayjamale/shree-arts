import { pricingPlans } from '../../data/pricing';
import { scrollToSection } from '../../utils/scroll';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import styles from './PricingSection.module.css';

const PricingSection = () => {
  return (
    <section id='packages'>
      <Container>
        <SectionTitle
          eyebrow='Packages'
          title='Flexible pricing for every scale of shoot.'
          subtitle='Choose a package as-is or customize it with add-ons like drone coverage, teaser films, and extended coverage hours.'
        />

        <div className={styles.grid}>
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 90}>
              <article className={`${styles.card} ${plan.isRecommended ? styles.recommended : ''}`.trim()}>
                {plan.isRecommended ? <span className={styles.badge}>Most Popular</span> : null}
                <h3 className={styles.name}>{plan.name}</h3>
                <div className={styles.price}>{plan.price}</div>
                <p className={styles.description}>{plan.description}</p>

                <ul className={styles.featureList}>
                  {plan.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>

                <Button variant={plan.isRecommended ? 'primary' : 'secondary'} onClick={() => scrollToSection('contact')}>
                  Choose Package
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
