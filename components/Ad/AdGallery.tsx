import React, { useState, useCallback, FC } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

type AdGalleryProps = {
  setLoadGallery?: (value: boolean) => void;
  open?: boolean;
  photos: any;
};

export const AdGallery: FC<AdGalleryProps> = (props) => {
  const { setLoadGallery, open, photos } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(open ? open : false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    setLoadGallery && setLoadGallery(false);
  };

  const loadPhotos = () => {
    return photos;
  };

  return (
    <>
      <Gallery photos={loadPhotos()} onClick={openLightbox} direction="row" />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x): any => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};
