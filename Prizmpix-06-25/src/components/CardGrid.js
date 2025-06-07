import React, { useState } from 'react';
import './CardGrid.css';

const CardGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);

  const handleImageClick = (src, description) => {
    setSelectedImage(src);
    setSelectedDescription(description);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedDescription(null);
  };

  return (
    <div className="card-grid">
        <h2>Recent Projects</h2>
      <div className="image-grid">
        <div className="image-row">
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 1" onClick={() => handleImageClick("/images/spacing-1.png", "Description 1 this is a description so that a user can read details of thew work")} />
            <div className="description-box">Description 1 this is a description so that a user can read details of thew work</div>
          </div>
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 2" onClick={() => handleImageClick("/images/spacing-1.png", "Description 2")} />
            <div className="description-box">Description 2</div>
          </div>
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 3" onClick={() => handleImageClick("/images/spacing-1.png", "Description 3")} />
            <div className="description-box">Description 3</div>
          </div>
        </div>
        <div className="image-row">
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 4" onClick={() => handleImageClick("/images/spacing-1.png", "Description 4")} />
            <div className="description-box">Description 4</div>
          </div>
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 5" onClick={() => handleImageClick("/images/spacing-1.png", "Description 5")} />
            <div className="description-box">Description 5</div>
          </div>
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 6" onClick={() => handleImageClick("/images/spacing-1.png", "Description 6")} />
            <div className="description-box">Description 6</div>
          </div>
        </div>
      </div>
    <div className={`modal-overlay ${selectedImage ? 'show' : ''}`} onClick={handleCloseModal}>
  <div className="modal-content">
    {selectedImage && (
      <>
        <img src={selectedImage} alt="Selected Image" />
        <div className="modal-description">{selectedDescription}</div>
      </>
    )}
  </div>
</div>
    </div>
  );
};

export default CardGrid;