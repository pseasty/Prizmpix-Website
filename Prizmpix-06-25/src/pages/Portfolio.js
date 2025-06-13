import React from 'react';
import CaseGallery from '../components/CaseGallery';

const caseStudies = [
  {
    title: 'Equality Fashion Week Rebuild',
    subtitle: 'UX / UI / Frontend',
    image: '/images/case1.1.png',
    preview: 'Research, wireframing, and launch of an inclusive fashion site.',
    link: '/case-study/equality-fashion-week'
  },
  {
    title: 'Brand Launch for Green Earth Co.',
    subtitle: 'Branding / Web Design',
    image: '/images/case2.1.png',
    preview: 'Designed and launched e-commerce site for eco products.',
    link: '/case-study/green-earth'
  },
  {
    title: 'Music Platform UX Overhaul',
    subtitle: 'Product Design',
    image: '/images/case3.1.png',
    preview: 'Improved user retention by redesigning playlist features.',
    link: '/case-study/music-platform'
  }
];

const Portfolio = () => {
  return (
    <div className="title-container">
      <div className="marquee">
        <h1>
          <span>Portfolio.</span>
          <span>//</span>
          <span>Portfolio.</span>
          <span>//</span>
          <span>Portfolio.</span>
          <span>//</span>
        </h1>
      </div>
      <div className="marquee">
        <p></p>
      </div>
      <CaseGallery items={caseStudies} />
    </div>
  );
};

export default Portfolio;