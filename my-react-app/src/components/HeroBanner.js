import React from 'react';
import './HeroBanner.scss';
import ContentContainer from '../ui/ContentWrapper';

function HeroBanner() {
    return (
        <section className="hero">
            <ContentContainer>
                <div className="hero__content">
                    <p className="hero__content-title">
                        <span>Full Stack Developer</span> crafting <span>custom web solutions</span> with frontend expertise
                    </p>
                </div>
            </ContentContainer>
        </section>
    );
}

export default HeroBanner;