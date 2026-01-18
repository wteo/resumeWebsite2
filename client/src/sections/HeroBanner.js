import React from 'react';

import ContentContainer from '../ui/ContentWrapper';

import './HeroBanner.scss';

function HeroBanner() {
    return (
        <section className="hero">
            <ContentContainer>
                <div className="hero__content">
                    <p className="hero__content-title">
                        <span>Full Stack Developer</span> specializing in <span>CRM integrations</span> and business automation systems
                    </p>
                </div>
            </ContentContainer>
        </section>
    );
}

export default HeroBanner;