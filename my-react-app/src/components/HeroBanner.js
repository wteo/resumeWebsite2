import React from 'react';
import './HeroBanner.scss';

function HeroBanner() {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__content-title">Add a title here</h1>
                <h3 className="hero__content-subtitle">Add a subtitle here</h3>
                <button>Add link here</button>
            </div>
        </section>
    );
}

export default HeroBanner;