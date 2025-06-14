import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="title-container">
      <div className="marquee">
        <h1>
          <span>PATRICK EAST</span>
          <span></span>
          <span>PATRICK EAST</span>
          <span></span>
          <span>PATRICK EAST</span>
          <span></span>
          <span>PATRICK EAST</span>
          <span></span>
          <span>PATRICK EAST</span>
          <span></span>
        </h1>
      </div>
      <div style={{ marginTop: '20px' }}>
        <div className="card" style={{ padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Carousel style={{ borderRadius: '0px', overflow: 'hidden' }}>
            <Carousel.Item>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src="/images/carousel1.png"
                  alt="First slide"
                />
              </div>
              <Carousel.Caption className="carousel-caption-container">
                <a href="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="carousel-caption-card">
                    <h3>User Interface Design</h3>
                    <p>This expandable menu design enhances user experience by providing a clean and organized interface.</p>
                    <p>Click here to view my portfolio</p>
                  </div>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src="/images/carousel2.png"
                  alt="Second slide"
                />
              </div>
              <Carousel.Caption className="carousel-caption-container">
                <a href="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="carousel-caption-card">
                    <h3>Graphic Design</h3>
                    <p>Working with design teams, I've visually crafted stunning graphics that effectively communicate brand messages.</p>
                    <p>Click here to view my portfolio</p>
                  </div>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src="/images/carousel3.png"
                  alt="Third slide"
                />
              </div>
              <Carousel.Caption className="carousel-caption-container">
                <a href="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="carousel-caption-card">
                    <h3>Physical Product / Environmental Design</h3>
                    <p>Worked with CAD software, an engineer and factories to design and prototype physical products</p>
                    <p>Click here to view my portfolio</p>
                  </div>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>            
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src="/images/carousel4.png"
                  alt="Fourth slide"
                />
              </div>
              <Carousel.Caption className="carousel-caption-container">
                <a href="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="carousel-caption-card">
                    <h3>Product Classification & Ontology</h3>
                    <p>Developing information architecture as a product tree to organize a Linkup website redesign for better user experience</p>
                    <p>Click here to view my portfolio</p>
                  </div>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src="/images/carousel5.png"
                  alt="Fifth slide"
                />
              </div>
              <Carousel.Caption className="carousel-caption-container">
                <a href="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="carousel-caption-card">
                    <h3>Used Car App Design</h3>
                    <p>Design of a used car app to facilitate buying used cars with functionality existing used car apps</p>
                    <p>Click here to view my portfolio</p>
                  </div>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>            
              <div className="carousel-image-container">
                <img
                  className="d-block w-100 carousel-image"
                  src="/images/carousel6.png"
                  alt="Sixth slide"
                />
              </div>
              <Carousel.Caption className="carousel-caption-container">
                <a href="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="carousel-caption-card">
                    <h3>Package Design</h3>
                    <p>Package design and logo solutions that enhance brand awareness, product visibility and user experience</p>
                    <p>Click here to view my portfolio</p>
                  </div>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;