import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import picture1 from '../../images/picture1.jpg';
import picture2 from '../../images/picture2.jpg';
import picture3 from '../../images/picture3.jpg';
import picture4 from '../../images/picture4.jpg';
import picture5 from '../../images/picture5.jpg';
import picture6 from '../../images/picture6.jpg';
import picture7 from '../../images/picture7.jpg';
import picture8 from '../../images/picture8.jpg';
import picture9 from '../../images/picture9.jpg';
import picture10 from '../../images/picture10.jpg';
import picture11 from '../../images/picture11.jpg';

const PictureModal = ({ onClose }) => {
  const [openLightbox, setOpenLightbox] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const images = [picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10, picture11];

  const openImageInLightbox = (index) => {
    setCurrentImageIndex(index);
    setOpenLightbox(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal picture-modal">
        <button className="close-btn" onClick={onClose}></button>
        <div className="modal-content">
          <div className="gallery">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Picture ${index + 1}`}
                onClick={() => openImageInLightbox(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {openLightbox && (
        <Lightbox
          open={openLightbox}
          close={() => setOpenLightbox(false)}
          slides={images.map((src) => ({ src }))}
          initialIndex={currentImageIndex}
        />
      )}
    </div>
  );
};

export default PictureModal;
