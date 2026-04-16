import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import TeamSection from '../components/team/TeamSection';
import PhotographerPortfolioSection from '../components/portfolio/PhotographerPortfolioSection';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import VideosSection from '../components/portfolio/VideosSection';
import HighlightsSection from '../components/home/HighlightsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingSection from '../components/home/PricingSection';
import FAQSection from '../components/home/FAQSection';
import ContactSection from '../components/contact/ContactSection';

import styles from './HomePage.module.css';

const HomePage = ({ theme, onToggleTheme }) => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main className={styles.mainContent}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <PhotographerPortfolioSection />
        <PortfolioSection />
        <VideosSection />
        <HighlightsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
