import Container from '../common/Container';
import Button from '../common/Button';
import SocialIconLinks from '../common/SocialIconLinks';
import { siteData } from '../../data/siteData';
import { services } from '../../data/services';
import { scrollToSection } from '../../utils/scroll';
import styles from './Footer.module.css';

const Footer = () => {
  const quickLinks = [...siteData.navLinks, { id: 'photographer-portfolio', label: 'Photographer Portfolio' }];

  const socialLinks = siteData.contact.social.reduce((links, item) => {
    links[item.name.toLowerCase()] = item.href;
    return links;
  }, {});

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.shell}>
          <div className={styles.ctaBand}>
            <div>
              <p className={styles.ctaEyebrow}>Premium Studio Experience</p>
              <h3 className={styles.ctaTitle}>Ready to turn your celebration into timeless visual stories?</h3>
              <p className={styles.ctaCopy}>
                Let us plan your timeline, coverage style, and final deliverables with clarity from day one.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Button variant='primary' onClick={() => scrollToSection('contact')}>
                Book a Consultation
              </Button>
              <Button variant='secondary' onClick={() => scrollToSection('portfolio')}>
                Explore Gallery
              </Button>
            </div>
          </div>

          <div className={styles.contentGrid}>
            <section className={styles.brandBlock}>
              <p className={styles.brandName}>{siteData.brandFull}</p>
              <p className={styles.brandCopy}>
                Premium photography and cinematic films crafted with artistic direction, emotional storytelling, and
                precision delivery.
              </p>
              <div className={styles.metaList}>
                <p>{siteData.contact.address}</p>
                <p>{siteData.contact.hours}</p>
              </div>
              <SocialIconLinks links={socialLinks} />
            </section>

            <section>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.links}>
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button type='button' className={styles.linkButton} onClick={() => scrollToSection(link.id)}>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className={styles.columnTitle}>Signature Services</h4>
              <ul className={styles.links}>
                {services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <button type='button' className={styles.linkButton} onClick={() => scrollToSection('services')}>
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className={styles.columnTitle}>Direct Contact</h4>
              <ul className={styles.contactList}>
                <li>
                  <a href={`tel:${siteData.contact.phone}`} className={styles.contactLink}>
                    {siteData.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteData.contact.email}`} className={styles.contactLink}>
                    {siteData.contact.email}
                  </a>
                </li>
                <li>
                  <button type='button' className={styles.contactLinkButton} onClick={() => scrollToSection('contact')}>
                    Open Contact Section
                  </button>
                </li>
              </ul>
            </section>
          </div>

          <div className={styles.bottomRow}>
            <p>{siteData.footer.copyright}</p>
            <span className={styles.badge}>Handcrafted Visual Experience</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
