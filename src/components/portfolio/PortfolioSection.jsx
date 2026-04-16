import { useMemo, useState } from 'react';
import { portfolioCategories, portfolioItems } from '../../data/portfolio';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import Modal from '../common/Modal';
import styles from './PortfolioSection.module.css';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id='portfolio'>
      <Container>
        <SectionTitle
          eyebrow='Portfolio'
          title='A curated gallery of visual stories.'
          subtitle='Explore our signature style across weddings, portraits, events, traditional ceremonies, outdoor sessions, and product campaigns.'
        />

        <div className={styles.filters}>
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type='button'
              className={`${styles.filterBtn} ${activeCategory === category ? styles.filterActive : ''}`.trim()}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.gallery}>
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} className={styles.item} delay={(index % 6) * 45}>
              <button type='button' className={styles.card} onClick={() => setSelectedItem(item)}>
                <img src={item.image} alt={item.title} loading='lazy' />
                <span className={styles.overlay}>{item.title}</span>
              </button>
            </Reveal>
          ))}
        </div>

        <Modal
          isOpen={Boolean(selectedItem)}
          title={selectedItem ? `${selectedItem.title} - ${selectedItem.category}` : ''}
          onClose={() => setSelectedItem(null)}
        >
          {selectedItem ? <img className={styles.previewImage} src={selectedItem.image} alt={selectedItem.title} /> : null}
        </Modal>
      </Container>
    </section>
  );
};

export default PortfolioSection;
