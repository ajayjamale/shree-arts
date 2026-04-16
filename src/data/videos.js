import videoWeddingThumb from '../assets/images/videos/video-wedding.svg';
import videoEventThumb from '../assets/images/videos/video-events.svg';
import videoBrandThumb from '../assets/images/videos/video-brand.svg';
import weddingReel from '../assets/videos/reel-wedding.mp4';
import eventReel from '../assets/videos/reel-events.mp4';
import brandReel from '../assets/videos/reel-brand.mp4';

export const videos = [
  {
    id: 1,
    title: 'Cinematic Wedding Reel',
    category: 'Wedding Film',
    duration: '02:34',
    thumbnail: videoWeddingThumb,
    source: weddingReel,
  },
  {
    id: 2,
    title: 'Event Highlight Story',
    category: 'Event Film',
    duration: '01:58',
    thumbnail: videoEventThumb,
    source: eventReel,
  },
  {
    id: 3,
    title: 'Brand Visual Narrative',
    category: 'Commercial Film',
    duration: '02:10',
    thumbnail: videoBrandThumb,
    source: brandReel,
  },
];
