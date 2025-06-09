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
      <h2>Case Study 1: Equality Fashion Week Rebuild</h2>
      <div className="image-grid">
        <div className="image-row">
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 1" onClick={() => handleImageClick("/images/spacing-1.png", "Interviews with client, user research, and competitor analysis informed the design process. User persona was created to guide the design, ensuring a user-centered approach. Key findings highlighted the need for modern design, improved navigation, and enhanced mobile experience.")} />
          </div>
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 2" onClick={() => handleImageClick("/images/spacing-1.png", "Description 2")} />
          </div>
        </div>
        <div className="description-row">
          <div className="description-box">Interviews with client, user research, and competitor analysis informed the design process. 
            User persona was created to guide the design, ensuring a user-centered approach. Key findings highlighted the need for 
            modern design, improved navigation, and enhanced mobile experience.</div>
          <div className="description-box">Low-fidelity wireframes were developed and refined into high-fidelity designs using Framer. 
            The design system included a custom colour palette, typography, and component library. Responsive design principles ensured a 
            seamless experience across devices.</div>
        </div>
        <div className="image-row">
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 3" onClick={() => handleImageClick("/images/spacing-1.png", "Description 3")} />
          </div>
          <div className="image-box">
            <img src="/images/spacing-1.png" alt="Image 4" onClick={() => handleImageClick("/images/spacing-1.png", "Description 4")} />
          </div>
        </div>
        <div className="description-row">
          <div className="description-box">Interactive prototypes were built and tested with users on different devices, gathering feedback 
            and iterating on the design. Usability testing ensured a smooth user experience, and the design was refined accordingly.</div>
          <div className="description-box">The site was launched, and analytics were set up to track user behavior and performance. The 
            client was given training on the software, enabling them to maintain and update the site independently. Post-launch 
            evaluation showed significant improvements in user engagement, mobile traffic, and conversion rates.</div>
        </div>
      </div>
      <div className="conclusion-container">
        <p>The redesign successfully achieved the client's goals, providing a modern, user-friendly experience that aligned with their brand 
          and objectives. The project showcased the effectiveness of a user-centered design process and Framer's capabilities in creating 
          responsive, interactive websites. Initial prototypes https://special-channel-275950.framer.app iteration on client feedback https://jolly-evolution-401688.framer.app </p>
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