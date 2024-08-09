import React from 'react';
import './HeroBanner.scss';

function HeroBanner() {
    return (
        <section className="hero">
            <div className="hero__content">
                <p className="hero__content-title">
                    <span>Full Stack Developer</span> crafting <span>custom web solutions</span> with frontend expertise
                </p>
            </div>
        </section>
    );
}

export default HeroBanner;