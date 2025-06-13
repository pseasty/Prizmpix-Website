import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import CaseStudyMobile from './CaseStudyMobile';


const CaseStudy = ({ title, images, descriptions, captions, conclusion, links }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1100px)' });
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

  if (!isDesktop && CaseStudyMobile) {
    return (
      <CaseStudyMobile
        title={title}
        images={images}
        captions={captions}
        descriptions={descriptions}
        conclusion={conclusion}
        links={links}
      />
    );
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="image-grid">
        {[0, 2].map(rowStart => (
          <React.Fragment key={rowStart}>
            <div className="image-row">
              {[0, 1].map(offset => (
                <div className="image-box" key={rowStart + offset}>
                  <img
                    src={images[rowStart + offset].src}
                    alt={`Image ${rowStart + offset + 1}`}
                    onClick={() => handleImageClick(images[rowStart + offset].src, captions[rowStart + offset])}
                  />
                </div>
              ))}
            </div>
            <div className="description-row">
              {[0, 1].map(offset => (
                <div className="description-box" key={rowStart + offset}>
                  {descriptions[rowStart + offset]}
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="conclusion-container">
        <p>{conclusion}</p>
        {links?.map((link, index) => (
          <p key={index}><a href={link.url}>{link.text}</a></p>
        ))}
      </div>
      {selectedImage && (
        <div className="modal-overlay show" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" />
            <div className="modal-caption">{selectedCaption}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const CardGrid = () => {
  const caseStudies = [
    {
      title: 'Case Study 1: Equality Fashion Week Rebuild',
      images: [
        { src: '/images/case1.1.png' },
        { src: '/images/case1.2.jpeg' },
        { src: '/images/case1.3.png' },
        { src: '/images/case1.4.png' },
      ],
      descriptions: [
        'Interviews with client, user research, and competitor analysis informed the design process... etc.',
        'Low-fidelity wireframes were developed and refined into high-fidelity designs using Framer... etc.',
        'Interactive prototypes were built and tested with users on different devices... etc.',
        'The site was launched, and analytics were set up... etc.',
      ],
      captions: ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4'],
      conclusion: "The redesign successfully achieved the client's goals...",
      links: [
        { url: "https://special-channel-275950.framer.app", text: "Initial prototype" },
        { url: "https://jolly-evolution-401688.framer.app", text: "Iteration based on feedback" }
      ]
    },
    {
      title: 'Case Study 2: Registration Software Redesign',
      images: [
        { src: '/images/case2.1.png' },
        { src: '/images/case2.2.png' },
        { src: '/images/case2.3.png' },
        { src: '/images/case2.4.png' },
      ],
      descriptions: [
        "Understanding Our Users...",
        "Empathizing with User Needs...",
        "Designing Solutions...",
        "Collaborative Design Process...",
      ],
      captions: ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4'],
      conclusion: "Through a user-centered design approach...",
      links: [
        { url: "https://www.figma.com/proto/q4kqZshWKar0I0l5MXsMt8/...", text: "Prototype" },
        { url: "https://www.figma.com/board/SfQl96wiawJN93Y1UyJQqg/...", text: "User Flow" },
        { url: "https://www.figma.com/board/8fIbn3StiqX22iuaVUZGMk/...", text: "Empathy Map" },
      ]
    },
    {
      title: 'Case Study 3: React.js Web App Development',
      images: [
        { src: '/images/case3.1.jpg' },
        { src: '/images/case3.2.png' },
        { src: '/images/case3.3.png' },
        { src: '/images/case3.4.png' },
      ],
      descriptions: [
        'Initial wireframes designed in Figma... etc.',
        "React.js clean and modular code...",
        "Final design with modal window...",
        "Responsive and mobile-friendly layout...",
      ],
      captions: ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4'],
      conclusion: "In conclusion, building this React.js web app...",
      links: [
        { url: "https://github.com/pseasty/Prizmpix-Website", text: "GitHub Project" }
      ]
    },
  ];

  return (
    <div>
      {caseStudies.map((data, index) => (
        <div className="card-grid" key={index}>
          <CaseStudy {...data} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
