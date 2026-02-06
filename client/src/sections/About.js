import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

import './About.scss';

import profile from '../assets/images/selfie.jpg';

function About({ routeHandler }) {
    return (
        <section className="about">
            <ContentWrapper>
                <h1 className="about__title">Wendy Teo</h1>
                <hr className="about__divider" />
                <hr className="about__divider" />
                <div className="about__group">
                    <div className="about__description">
                        <h1>About Me</h1>
                        <p>
                            10+ years in finance operations (accounts receivable, credit control, quote-to-cash workflows at IBM, Samsung, Hanson, Link Group) taught me where business systems break. Now I fix them through API integration and automation.                        </p>
                        <p>
                            Since 2023, I've specialized in connecting CRM platforms (e.g. HubSpot) and finance systems to eliminate manual data entry, automate workflows, and reduce operational friction. Recent work includes custom quote generation systems with CRM integration and multi-system fulfillment automation for e-commerce operations.
                        </p>
                        <p>
                            My finance background means I understand your pain points before you explain them. I've lived the inefficiencies. The same bottlenecks, the manual processes, the system gaps... Issues that slow down your team. Now, I solve them.
                        </p>
                        <p>
                            My technical focus lies in HubSpot API, Shopify integrations, custom middleware, and business process automation.
                        </p>
                        <p>
                            Originally from Malaysia, now based in Sydney. I am multilingual (English, Malay, Mandarin, Hokkien), handling multiple clients across APAC. 
                        </p>
                        <a href="/contact">Get in Touch</a>
                    </div>
                    <div className="about__image-wrapper">
                        <img src={ profile } loading="lazy" alt="Profile" className="about__image" />
                    </div>
                </div>
            </ContentWrapper>
        </section>
    );
}

export default About;