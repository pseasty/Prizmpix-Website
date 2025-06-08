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
                    <span>Explore my portfolio.</span>
                    <span>...</span>
                    <span>Explore my portfolio.</span>
                    <span>...</span>
                    <span>Explore my portfolio.</span>
                    <span>...</span>
                    <span>Explore my portfolio.</span>
                    <span>...</span>
                    <span>Explore my portfolio.</span>
                    <span>...</span>
                </p>
            </div>
            <div className="outer-card">
                <CardGrid />
            </div>
        </div>
    );
};

export default Portfolio;