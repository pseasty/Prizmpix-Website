// CaseStudyMobile.js
import React, { useState } from 'react';
import './CaseStudyMobile.css';

const CaseStudyMobile = ({ title, images, descriptions, captions, conclusion, links }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);

  const handleImageClick = (src, caption) => {
    setSelectedImage(src);
    setSelectedCaption(caption);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedCaption(null);
  };

  return (
    <div>
      <h2>{title}</h2>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={`Image ${index + 1}`} onClick={() => handleImageClick(image.src, captions[index])} />
          <div className="description-box">{descriptions[index]}</div>
        </div>
      ))}
      <div className="conclusion-container">
        <p>{conclusion}</p>
        <div>
          {links && links.map((link, index) => (
            <p key={index}><a href={link.url}>{link.text}</a></p>
          ))}
        </div>
      </div>
      <div className={`modal-overlay ${selectedImage ? 'show' : ''}`} onClick={handleCloseModal}>
        <div className="modal-content">
          {selectedImage && (
            <>
              <img src={selectedImage} alt="Selected Image" />
              <div className="modal-caption">{selectedCaption}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyMobile;