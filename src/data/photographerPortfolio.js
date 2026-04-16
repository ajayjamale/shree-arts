import weddingRoyal from '../assets/images/portfolio/wedding-royal.svg';
import portraitFashion from '../assets/images/portfolio/portrait-fashion.svg';
import traditionalRitual from '../assets/images/portfolio/traditional-ritual.svg';
import outdoorSunset from '../assets/images/portfolio/outdoor-sunset.svg';
import productLuxury from '../assets/images/portfolio/product-luxury.svg';

export const photographerPortfolioStats = [
  { id: 1, label: 'Signature Projects', value: '120+' },
  { id: 2, label: 'Wedding Stories', value: '320+' },
  { id: 3, label: 'Years Behind Lens', value: '8' },
];

export const photographerPortfolioItems = [
  {
    id: 1,
    title: 'Royal Ceremony Storyline',
    category: 'Wedding',
    location: 'Nashik',
    highlight: 'Cinematic rituals with emotional candid moments.',
    image: weddingRoyal,
  },
  {
    id: 2,
    title: 'Editorial Bride Portraits',
    category: 'Portrait',
    location: 'Mumbai',
    highlight: 'Studio lighting with modern editorial direction.',
    image: portraitFashion,
  },
  {
    id: 3,
    title: 'Heritage Ritual Frames',
    category: 'Traditional',
    location: 'Pune',
    highlight: 'Authentic colors, family expressions, and storytelling details.',
    image: traditionalRitual,
  },
  {
    id: 4,
    title: 'Golden Hour Couple Session',
    category: 'Outdoor',
    location: 'Igatpuri',
    highlight: 'Natural movement and warm sunset compositions.',
    image: outdoorSunset,
  },
  {
    id: 5,
    title: 'Luxury Product Campaign',
    category: 'Commercial',
    location: 'Nashik Studio',
    highlight: 'Precision framing for premium brand storytelling.',
    image: productLuxury,
  },
];
