import classNames from 'classnames/bind';
import styles from './intro.module';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { VideoPlayer } from '~/components/VideoPlayer';
import useOnWindowResize from '~/hooks/useOnWindowResize';
import IntroPlayButton from '~/assets/svg/IntroPlayButton';

const cn = classNames.bind(styles);

export default function IntroVideo(props) {
  const { introVideoUrl, introVideoThumbnail } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    if (modalOpen) {
      setModalOpen(false);
      document.querySelector('body').style.overflow = 'auto';
    } else {
      setModalOpen(true);
      document.querySelector('body').style.overflow = 'hidden';
    }
  };

  useOnWindowResize(() => {
    if (document.body.style.overflow !== 'hidden' && modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  return (
    <div className={cn('video')}>
      <button className={cn('video-play')} onClick={handleModalOpen}>
        <IntroPlayButton />
      </button>
      <img src={introVideoThumbnail} alt="" />
      {modalOpen && (
        <div className={cn('video-modal-wrapper')}>
          <div className={cn('video-overlay')} onClick={handleModalOpen} />
          <button
            className={cn('close-button')}
            onClick={handleModalOpen}
          ></button>
          <div className={cn('video-modal')}>
            <VideoPlayer videoId="Video-1" videoLink={introVideoUrl} />
          </div>
        </div>
      )}
    </div>
  );
}

IntroVideo.propTypes = {
  introVideoUrl: PropTypes.string,
  introVideoThumbnail: PropTypes.string,
};
