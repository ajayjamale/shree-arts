import heroImage from '../assets/images/hero/hero-main.svg';
import aboutImage from '../assets/images/about/about-studio.svg';

export const siteData = {
  brandShort: 'Shree Arst',
  brandFull: 'Shree Arst Photo Studio',
  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'photographers', label: 'Photographer' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'videos', label: 'Videos' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    eyebrow: 'Cinematic Storytelling Studio',
    title: 'Crafting timeless frames for weddings, portraits, and life moments.',
    subtitle:
      'We blend editorial direction, emotional storytelling, and studio precision to turn every shoot into an unforgettable visual legacy.',
    primaryCta: { label: 'View Portfolio', targetId: 'portfolio' },
    secondaryCta: { label: 'Book a Shoot', targetId: 'packages' },
    tertiaryCta: { label: 'Contact Us', targetId: 'contact' },
    stats: [
      { label: 'Happy Clients', value: '1,250+' },
      { label: 'Shoots Delivered', value: '2,800+' },
      { label: 'Years of Craft', value: '11+' },
    ],
    heroImage,
  },
  about: {
    heading: 'Built on emotion, elevated by craft.',
    story:
      'Shree Arst Photo Studio began as a passion project focused on preserving real emotions. Today, we are a full-service visual studio trusted for weddings, portraits, events, and commercial shoots.',
    mission:
      'Our mission is simple: create cinematic, premium-quality visuals that feel personal, modern, and deeply authentic.',
    achievements: [
      'Awarded Top Creative Studio - Western India Visual Collective 2025',
      'Delivered destination wedding projects across 9 Indian states',
      'In-house retouching and album design team for faster turnaround',
    ],
    image: aboutImage,
  },
  contact: {
    address: '2nd Floor, Shree Arst Complex, College Road, Nashik, Maharashtra 422005',
    phone: '+91 98765 43210',
    email: 'hello@shreearststudio.com',
    hours: 'Mon - Sun: 9:00 AM - 9:00 PM',
    social: [
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'YouTube', href: '#' },
      { name: 'Behance', href: '#' },
    ],
  },
  footer: {
    copyright: `Copyright ${new Date().getFullYear()} Shree Arst Photo Studio. All rights reserved.`,
  },
};
