import { useState } from 'react';
import { siteData } from '../../data/siteData';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormState({ name: '', email: '', phone: '', message: '' });

    window.setTimeout(() => {
      setIsSubmitted(false);
    }, 3500);
  };

  const { contact } = siteData;

  return (
    <section id='contact'>
      <Container>
        <SectionTitle
          eyebrow='Contact'
          title='Plan your shoot with our team.'
          subtitle='Share your event details and visual preferences. We will get back with a package and scheduling options.'
        />

        <div className={styles.grid}>
          <Reveal>
            <div className={styles.formCard}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <input
                    className={styles.input}
                    type='text'
                    name='name'
                    placeholder='Full Name'
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className={styles.input}
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  className={styles.input}
                  type='tel'
                  name='phone'
                  placeholder='Phone Number'
                  value={formState.phone}
                  onChange={handleChange}
                  required
                />

                <textarea
                  className={styles.textarea}
                  name='message'
                  placeholder='Tell us about your event, preferred dates, and style...'
                  value={formState.message}
                  onChange={handleChange}
                  required
                />

                <div className={styles.submitRow}>
                  <Button type='submit'>Send Inquiry</Button>
                  {isSubmitted ? <span className={styles.message}>Thank you! We will connect with you soon.</span> : null}
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal direction='right'>
            <aside className={styles.infoCard}>
              <div className={styles.infoItem}>
                <p className={styles.infoLabel}>Address</p>
                <p className={styles.infoValue}>{contact.address}</p>
              </div>

              <div className={styles.infoItem}>
                <p className={styles.infoLabel}>Phone</p>
                <p className={styles.infoValue}>{contact.phone}</p>
              </div>

              <div className={styles.infoItem}>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>{contact.email}</p>
              </div>

              <div className={styles.infoItem}>
                <p className={styles.infoLabel}>Working Hours</p>
                <p className={styles.infoValue}>{contact.hours}</p>
              </div>

              <div className={styles.infoItem}>
                <p className={styles.infoLabel}>Social</p>
                <div className={styles.social}>
                  {contact.social.map((socialLink) => (
                    <a key={socialLink.name} href={socialLink.href} target='_blank' rel='noreferrer'>
                      {socialLink.name}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
