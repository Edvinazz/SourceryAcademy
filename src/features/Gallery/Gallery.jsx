import { useState, useEffect, useRef, useCallback } from 'react';
import { Loader, Heading } from '~/components';
import { processImages } from '~/utils/processImages';
import { randomizeImages } from '~/utils/randomizeImages';
import PropTypes from 'prop-types';
import Line from '~/assets/svg/Lines/MediaLine1';
import SecondLine from '~/assets/svg/Lines/MediaLine2';
import classNames from 'classnames/bind';
import styles from './gallery.module';
import useOnWindowResize from '~/hooks/useOnWindowResize';
import useCloseOnOutside from '~/hooks/useCloseOnOutside';
const cn = classNames.bind(styles);

export default function Gallery(props) {
  const { loading, pictures, error } = props;
  const [modal, setModalState] = useState(false);
  const [modalIndex, setModalIndexState] = useState(0);
  const imagesFiltrated = pictures.filter((item) =>
    item.type.includes('image')
  );
  const imagesRandomized = randomizeImages(imagesFiltrated, loading);
  const { rectangularImages, squareImages } = processImages(
    imagesRandomized,
    loading
  );
  const imagesDisplay = [
    squareImages[0],
    rectangularImages[0],
    squareImages[1],
    squareImages[2],
    squareImages[3],
    rectangularImages[1],
  ];
  const imagesModal = imagesFiltrated.filter(
    (item) => !imagesDisplay.includes(item)
  );
  const modalIndexRef = useRef(modalIndex);
  const imagesModalRef = useRef([]);
  if (typeof imagesModal !== 'undefined') {
    imagesModalRef.current = imagesModal;
  }

  const setModalIndex = (data) => {
    modalIndexRef.current = data;
    setModalIndexState(data);
  };

  useOnWindowResize(() => {
    if (document.body.style.overflow !== 'hidden' && modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  const toggleModal = (index) => {
    setModalState(!modal);
    setModalIndex(index);
    if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === 'ArrowRight') {
        handleNextImage();
      } else if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'Escape') {
        setModalState(false);
        if (document.body.style.overflow !== 'hidden') {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }
    },
    [setModalState]
  );

  useEffect(() => {
    if (modal) {
      window.addEventListener('keyup', handleKeyUp);
    } else {
      window.removeEventListener('keyup', handleKeyUp);
    }

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [modal, handleKeyUp]);

  const handleNextImage = () => {
    if (modalIndexRef.current === imagesModalRef.current.length - 1) {
      setModalIndex(0);
    } else {
      const updated = modalIndexRef.current + 1;
      setModalIndex(updated);
    }
  };

  const handlePrevImage = () => {
    if (modalIndexRef.current === 0) {
      setModalIndex(imagesModalRef.current.length - 1);
    } else {
      const updated = modalIndexRef.current - 1;
      setModalIndex(updated);
    }
  };

  const boxRef = useRef();
  useCloseOnOutside(boxRef, setModalState);

  return (
    <section id="Media" className={cn(`${!error ? 'container' : 'hidden'}`)}>
      <div className={cn('line-container-' + props.line)}>
        {props.line === 'home' ? <Line /> : <SecondLine />}
      </div>
      <Heading tag="h2" style="big">
        Media
      </Heading>

      {loading && <Loader />}
      {!loading && !error && (
        <div className={cn('grid-container')}>
          {imagesDisplay.map((picture, index) => (
            <div
              key={index}
              className={cn('grid-item')}
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' ? toggleModal(index) : '')}
            >
              <img
                src={picture?.thumbnail}
                alt="media picture"
                className={cn('img')}
                onClick={() => {
                  toggleModal(index);
                }}
              />
            </div>
          ))}
        </div>
      )}
      {modal && (
        <div className={cn(modal ? 'modal' : 'modal display-none')}>
          <div className={cn('right')} onClick={() => handleNextImage()}>
            <div className={cn('right-top')}></div>
            <div className={cn('right-bottom')}></div>
          </div>
          <div className={cn('left')} onClick={() => handlePrevImage()}>
            <div className={cn('left-top')}></div>
            <div className={cn('left-bottom')}></div>
          </div>
          <span onClick={toggleModal} className={cn('close-btn')}></span>

          {modalIndex <= 5 ? (
            <img
              ref={boxRef}
              className={cn('img-modal')}
              src={imagesDisplay[modalIndex].src}
            ></img>
          ) : (
            <img
              ref={boxRef}
              className={cn('img-modal')}
              src={imagesModal[modalIndex].src}
            ></img>
          )}
        </div>
      )}
    </section>
  );
}

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      academy: PropTypes.string,
      type: PropTypes.string,
      thumbnail: PropTypes.string,
      src: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  line: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      academy: PropTypes.string,
      type: PropTypes.string,
      thumbnail: PropTypes.string,
      src: PropTypes.string,
    })
  ),
};
