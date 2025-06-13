import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CaseGallery.css'; 
import CaseStudy1 from './CaseStudy1';
import CaseStudy2 from './CaseStudy2';
import CaseStudy3 from './CaseStudy3';

const CaseGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const items = [
    {
      title: "Case Study 1: Equality Fashion Week Rebuild",
      image: "/images/case1.3.png",
      component: <CaseStudy1 />,
    },
    {
      title: "Case Study 2: Registration Software Redesign",
      image: "/images/case2.3.png",
      component: <CaseStudy2 />,
    },
    {
      title: "Case Study 3: React.js Web App Development & Design",
      image: "/images/case3.4.png",
      component: <CaseStudy3 />,
    }
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {items.map((item, index) => (
          <div
            className="col-12 col-md-4 mb-4"
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{ cursor: 'pointer' }}
          >
            <div className="position-relative">
              <img src={item.image} className="case-preview" alt="Case Preview" />
              <div className="overlay-text position-absolute bottom-0 start-0 p-2 bg-dark bg-opacity-50 text-white w-100">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={selectedIndex !== null}
        onHide={() => setSelectedIndex(null)}
        size="xl"
        centered
        scrollable
        backdrop={true}
        keyboard={true}
        contentClassName="modal-content-black"
      >
        <Modal.Header closeButton>
          <Modal.Title>{items[selectedIndex]?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedIndex !== null && items[selectedIndex].component}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedIndex(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CaseGallery;