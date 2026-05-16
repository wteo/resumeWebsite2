import React from 'react';

import ContentContainer from '../ui/ContentWrapper';

import './HeroBanner.scss';

function HeroBanner() {
    return (
        <section className="hero">
            <ContentContainer>
                <div className="hero__content">
                    <h1 className="hero__content-title">
                        Business Systems Integration Specialist | <span>CRM</span> + <span>Finance Automation</span>
                    </h1>
                </div>
            </ContentContainer>
        </section>
    );
}

export default HeroBanner;