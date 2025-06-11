import React, { useState } from 'react';
import './CardGrid.css';

const CaseStudy = ({ title, images, descriptions, conclusion, links }) => {
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
    <div>
      <h2>{title}</h2>
      <div className="image-grid">
        <div className="image-row">
          <div className="image-box">
            <img src={images[0].src} alt="Image 1" onClick={() => handleImageClick(images[0].src, descriptions[0])} />
          </div>
          <div className="image-box">
            <img src={images[1].src} alt="Image 2" onClick={() => handleImageClick(images[1].src, descriptions[1])} />
          </div>
        </div>
        <div className="description-row">
          <div className="description-box">{descriptions[0]}</div>
          <div className="description-box">{descriptions[1]}</div>
        </div>
        <div className="image-row">
          <div className="image-box">
            <img src={images[2].src} alt="Image 3" onClick={() => handleImageClick(images[2].src, descriptions[2])} />
          </div>
          <div className="image-box">
            <img src={images[3].src} alt="Image 4" onClick={() => handleImageClick(images[3].src, descriptions[3])} />
          </div>
        </div>
        <div className="description-row">
          <div className="description-box">{descriptions[2]}</div>
          <div className="description-box">{descriptions[3]}</div>
        </div>
      </div>
      <div className="conclusion-container">
        <p style={{ marginBottom: '20px' }}>{conclusion}</p>
        {links && links.map((link, index) => (
          <p key={index}><a href={link.url}>{link.text}</a></p>
        ))}
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

const CardGrid = () => {
  const caseStudy1Data = {
    title: 'Case Study 1: Equality Fashion Week Rebuild',
    images: [
      { src: '/images/case1.1.png' },
      { src: '/images/case1.2.jpeg' },
      { src: '/images/case1.3.png' },
      { src: '/images/case1.4.png' },
    ],
    descriptions: [
      'Interviews with client, user research, and competitor analysis informed the design process. User persona was created to guide the design, ensuring a user-centered approach. Key findings highlighted the need for modern design, improved navigation, and enhanced mobile experience.',
      'Low-fidelity wireframes were developed and refined into high-fidelity designs using Framer. The design system included a custom colour palette, typography, and component library. Responsive design principles ensured a seamless experience across devices.',
      'Interactive prototypes were built and tested with users on different devices, gathering feedback and iterating on the design. Usability testing ensured a smooth user experience, and the design was refined accordingly.',
      'The site was launched, and analytics were set up to track user behavior and performance. The client was given training on the software, enabling them to maintain and update the site independently. Post-launch evaluation showed significant improvements in user engagement, mobile traffic, and conversion rates.',
    ],
    conclusion: 'The redesign successfully achieved the client\'s goals, providing a modern, user-friendly experience that aligned with their brand and objectives. The project showcased the effectiveness of a user-centered design process and Framer\'s capabilities in creating responsive, interactive websites. Initial prototype https://special-channel-275950.framer.app iteration on client feedback https://jolly-evolution-401688.framer.app',
  };

  const caseStudy2Data = {
    title: 'Case Study 2: Equality Fashion Week Rebuild',
    images: [
      { src: '/images/case2.1.png' },
      { src: '/images/case2.2.png' },
      { src: '/images/case2.3.png' },
      { src: '/images/case2.4.png' },
    ],
    descriptions: [
      "Understanding Our Users: To create an effective redesign of our registration software, we first needed to understand our users. Meet Jolly Jerry, a user persona who represents our target audience. Jolly Jerry's characteristics, behaviors, and pain points help us empathize with our users and design a solution that meets their needs.",
      "Empathizing with User Needs: Our empathy map helps us understand Jolly Jerry's thoughts, feelings, and pain points. By putting ourselves in his shoes, we can design a solution that addresses his specific needs and frustrations. This empathy map informs our design decisions and ensures that our solution is user-centered.",
      "Designing Solutions: Using Figma, we created wireframe prototypes to visualize and test our design solutions. These prototypes allowed us to iterate and refine our design, ensuring that it meets user needs and is intuitive to use. Through cross-collaborative feedback and iteration, we are continually improving our design.",
      "Collaborative Design Process: Our design process is highly collaborative, and we use tools like TRAC ticketing software to track bug fixes and feature requests. This thread shows the conversation and feedback from our team, which helps us refine our design and ensure that it meets user needs. We are committed to continuous improvement and iteration.",
    ],
    conclusion: "Through a user-centered design approach, we have created a redesign of the registration software that addresses the specific needs and pain points of our users. Our collaborative and iterative process ensures that our design is intuitive and efficient. We are committed to continuous improvement and refinement to provide a better user experience.",
      links: [
        { url: "https://www.figma.com/proto/q4kqZshWKar0I0l5MXsMt8/Untitled?node-id=1-79&t=9P6uNQw7Zpgy6roi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A79", text: "Visit My Prototype" },
        { url: "https://www.figma.com/board/SfQl96wiawJN93Y1UyJQqg/Userflow-Registration-Confirmation?node-id=36027-160&t=JNyR5oodqo1phrzS-1", text: "Visit My User Flow" },
        { url: "https://www.figma.com/board/8fIbn3StiqX22iuaVUZGMk/Empathy-Map-Registration-Confirmation?node-id=0-1&t=JNyR5oodqo1phrzS-1", text: "Visit My Empathy Map" }
      ],
  };

  const caseStudy3Data = {
    title: 'Case Study 3: Equality Fashion Week Rebuild',
    images: [
      { src: '/images/case1.1.png' },
      { src: '/images/case1.2.jpeg' },
      { src: '/images/case1.3.png' },
      { src: '/images/case1.4.png' },
    ],
    descriptions: [
      'Interviews with client, user research, and competitor analysis informed the design process. User persona was created to guide the design, ensuring a user-centered approach. Key findings highlighted the need for modern design, improved navigation, and enhanced mobile experience.',
      'Low-fidelity wireframes were developed and refined into high-fidelity designs using Framer. The design system included a custom colour palette, typography, and component library. Responsive design principles ensured a seamless experience across devices.',
      'Interactive prototypes were built and tested with users on different devices, gathering feedback and iterating on the design. Usability testing ensured a smooth user experience, and the design was refined accordingly.',
      'The site was launched, and analytics were set up to track user behavior and performance. The client was given training on the software, enabling them to maintain and update the site independently. Post-launch evaluation showed significant improvements in user engagement, mobile traffic, and conversion rates.',
    ],
    conclusion: 'The redesign successfully achieved the client\'s goals, providing a modern, user-friendly experience that aligned with their brand and objectives. The project showcased the effectiveness of a user-centered design process and Framer\'s capabilities in creating responsive, interactive websites. Initial prototype https://special-channel-275950.framer.app iteration on client feedback https://jolly-evolution-401688.framer.app',
  };

  return (
    <div>
      <div className="card-grid">
        <CaseStudy
          title={caseStudy1Data.title}
          images={caseStudy1Data.images}
          descriptions={caseStudy1Data.descriptions}
          conclusion={caseStudy1Data.conclusion}
        />
      </div>
      <div className="card-grid">
        <CaseStudy
          title={caseStudy2Data.title}
          images={caseStudy2Data.images}
          descriptions={caseStudy2Data.descriptions}
          conclusion={caseStudy2Data.conclusion}
          links={caseStudy2Data.links}
        />
      </div>
      <div className="card-grid">
        <CaseStudy
          title={caseStudy3Data.title}
          images={caseStudy3Data.images}
          descriptions={caseStudy3Data.descriptions}
          conclusion={caseStudy3Data.conclusion}
        />
      </div>
    </div>
  );
};

export default CardGrid;