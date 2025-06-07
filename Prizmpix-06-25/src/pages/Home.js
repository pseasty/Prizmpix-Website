import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <div className="card" style={{ padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Carousel style={{ borderRadius: '10px', overflow: 'hidden' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/development-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/development-2.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/development-3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ padding: '20px' }}>
        <h1>Prizmpix</h1>
        <p>Websites for everyone!</p>
      </div>
    </div>
  );
};

export default Home;