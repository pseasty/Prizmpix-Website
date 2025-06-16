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
      {items.map((item, index) => (
        <div
          key={index}
          className="card mb-4"
          style={{
            borderRadius: '10px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            padding: '20px'
          }}
          onClick={() => setSelectedIndex(index)}
        >
          <div style={{ position: 'relative' }}>
            <img src={item.image} className={`card-img-top case-preview animate-image`} alt="Case Preview" style={{ borderRadius: '0px', animationDelay: `${index * 0.2}s` }} />
            <div className="animate-caption" style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, rgb(39, 160, 112) 0%, rgb(86, 237, 177) 100%)',
              padding: '10px 20px',
              borderRadius: '0px',
              textAlign: 'center',
              animationDelay: `${index * 0.2 + 0.1}s`
            }}>
              <h5 style={{ margin: 0 }}>{item.title}</h5>
            </div>
          </div>
        </div>
      ))}

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