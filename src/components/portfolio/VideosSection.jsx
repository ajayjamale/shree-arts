import { useState } from 'react';
import { videos } from '../../data/videos';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import Modal from '../common/Modal';
import styles from './VideosSection.module.css';

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id='videos'>
      <Container>
        <SectionTitle
          eyebrow='Videos'
          title='Cinematic films from local projects and celebrations.'
          subtitle='Watch highlight reels crafted in-house with storytelling cuts, audio layering, and polished color grading.'
        />

        <div className={styles.grid}>
          {videos.map((video, index) => (
            <Reveal key={video.id} delay={index * 80}>
              <article className={styles.card}>
                <button type='button' className={styles.thumbButton} onClick={() => setSelectedVideo(video)}>
                  <img src={video.thumbnail} alt={video.title} loading='lazy' />
                  <span className={styles.playBadge}>Play</span>
                </button>
                <div className={styles.body}>
                  <span className={styles.category}>{video.category}</span>
                  <h3 className={styles.title}>{video.title}</h3>
                  <span className={styles.duration}>{video.duration}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Modal isOpen={Boolean(selectedVideo)} title={selectedVideo?.title ?? ''} onClose={() => setSelectedVideo(null)}>
          {selectedVideo ? (
            <video
              className={styles.previewVideo}
              src={selectedVideo.source}
              poster={selectedVideo.thumbnail}
              controls
              autoPlay
              preload='metadata'
            />
          ) : null}
        </Modal>
      </Container>
    </section>
  );
};

export default VideosSection;
