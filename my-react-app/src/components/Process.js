import React from 'react';

import Section from '../ui/Section';

import './Process.scss';

import placeholder from '../assets/placeholder.webp';

function Process() {

    const categories = [
        {
            category: 'Discovery & Planning',
            description: 'Every successful project starts with a thorough understanding of your goals and needs. In the discovery and planning phase, I collaborate with you to define project requirements, outline the scope, and create a strategic plan that aligns with your vision. This stage sets the foundation for a smooth and effective development process.',
            tools: [
                'Miro', 'Google Docs', 'Zoom', 'Jira',
            ],
            caseStudy: {
                src: placeholder,
                alt: 'Got Sauce?',
                desc: 'My first collaboration with Anthony Attapattu on his "Gotsauss" landing page. This was a pivotal project that laid the foundation for how I work today.'
            },
        },
        {
            category: 'Design & Development',
            description: 'Combining design and development, this phase focuses on bringing your project to life. I create visually appealing, user-friendly designs and build responsive websites that function flawlessly across platforms. From wireframes to the final build, this integrated approach ensures a seamless transition from concept to reality.',
            tools: [
                'Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'VueJS', 'CMS',
            ],
            caseStudy: {
                src: placeholder,
                alt: 'Brighten your online presence!',
                desc: 'I partnered with a UI/UX designer to craft a custom Shopify theme for Etikette, a family-owned candle business, revitalizing their online storefront.'

            },
        },
        {
            category: 'Testing & Launch',
            description: 'Before going live, I rigorously test the website to ensure optimal performance and functionality across all devices and browsers. Once everything is perfect, I handle the deployment, ensuring a smooth launch. Post-launch, I provide ongoing support to keep your website up-to-date and performing at its best.',
            tools: ['BrowserStack', 'Google Lighthouse / Analytics', 'GitHub', 'Netlify'],
            caseStudy: {
                src: placeholder,
                alt: 'Migrating to a new platform?',
                desc: ' I seamlessly transitioned Automic Group\'s website from WordPress to HubSpot, providing ongoing support for optimization.'
            },
        }
    ];

    return (
        <Section sectionClassName="process" title="How I work">
            <div className="process__group">
                {
                    categories.map((category, categoryIndex) => (
                        <div className="process__item" key={categoryIndex}>
                            <h4 className="process__category">{category.category}</h4>
                            <p className="process__description">{category.description}</p>
                            <ul className="process__list">Tools Used:
                                {category.tools.map((tool, toolIndex) => <li key={toolIndex}>{tool}</li>)}
                            </ul>
                            <div className="process__image-wrapper">
                                <img className="process__image" src={category.caseStudy.src} alt={category.caseStudy.alt} />
                            </div>
                            <p className="process__image-text"><strong>{category.caseStudy.alt}</strong> {category.caseStudy.desc}</p>
                            <a className="process__link" href="/">Learn More</a>
                        </div>
                    ))
                }
            </div>
        </Section>
    );
}

export default Process;