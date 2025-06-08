import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="title-container">
      <div className="marquee">
        <h1>
          <span>PATRICK EAST</span>
          <span>//</span>
          <span>PATRICK EAST</span>
          <span>//</span>
          <span>PATRICK EAST</span>
          <span>//</span>
          <span>PATRICK EAST</span>
          <span>//</span>
          <span>PATRICK EAST</span>
          <span>//</span>
        </h1>
      </div>
      <div style={{ marginTop: '20px' }}>
        <div className="card" style={{ padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Carousel style={{ borderRadius: '10px', overflow: 'hidden' }}>
            <Carousel.Item>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src="/images/development-1.jpg"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption className="carousel-caption-container">
                <div className="carousel-caption-card">
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src="/images/development-2.png"
                  alt="Second slide"
                />
              </div>
              <Carousel.Caption className="carousel-caption-container">
                <div className="carousel-caption-card">
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src="/images/development-3.jpg"
                  alt="Third slide"
                />
              </div>
              <Carousel.Caption className="carousel-caption-container">
                <div className="carousel-caption-card">
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;