import React from 'react';
import CardGrid from '../components/CardGrid.js';

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
                    <span>Portfolio.</span>
                    <span>//</span>
                    <span>Portfolio.</span>
                    <span>//</span>
                </h1>
            </div>
            <div className="marquee">
                <p>
 
                </p>
            </div>
            <div>
                <CardGrid />
            </div>
        </div>
    );
};

export default Portfolio;