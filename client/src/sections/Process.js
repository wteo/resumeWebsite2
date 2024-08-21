import React, { useRef } from 'react';

import Tag from '../components/Tag';

import Section from '../ui/Section';

import './Process.scss';

import gotsauss from '../assets/images/gotsauss.webp';
import gotsaussVideo from '../assets/videos/gotsauss.mp4';
import etikette from '../assets/images/etikette.webp';
import etiketteVideo from '../assets/videos/etikette.mp4';
import automic from '../assets/images/automic.webp';
import automicVideo from '../assets/videos/automic.mp4';

function Process() {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };


    const categories = [
        {
            category: 'Discovery & Planning',
            description: 'Every successful project starts with a thorough understanding of your goals and needs. In the discovery and planning phase, I collaborate with you to define project requirements, outline the scope, and create a strategic plan that aligns with your vision. This stage sets the foundation for a smooth and effective development process.',
            tools: [
                'Miro', 'Google Docs', 'Zoom', 'Jira',
            ],
            caseStudy: {
                src: gotsauss,
                alt: 'Got Sauce?',
                video: gotsaussVideo,
                desc: 'My first collaboration with Anthony Attapattu on his "Gotsauss" landing page. This was a pivotal project that laid the foundation for how I work today.'
            },
        },
        {
            category: 'Design & Development',
            description: 'Combining design and development, this phase focuses on bringing your project to life. I create visually appealing, user-friendly designs and build responsive websites that function flawlessly across platforms. From wireframes to the final build, this integrated approach ensures a seamless transition from concept to reality.',
            tools: [
                'Figma', 'Webflow', 'HTML', 'CSS', 'JavaScript', 'React', 'VueJS', 'Wordpress', 'Hubspot', 'Drupal', 'Shopify'
            ],
            caseStudy: {
                src: etikette,
                alt: 'Brighten your online presence!',
                video: etiketteVideo,
                desc: 'I partnered with a UI/UX designer to craft a custom Shopify theme for Etikette, a family-owned candle business, revitalizing their online storefront.'

            },
        },
        {
            category: 'Testing & Launch',
            description: 'Before going live, I rigorously test the website to ensure optimal performance and functionality across all devices and browsers. Once everything is perfect, I handle the deployment, ensuring a smooth launch. Post-launch, I provide ongoing support to keep your website up-to-date and performing at its best.',
            tools: ['BrowserStack', 'Google Lighthouse / Analytics', 'GitHub', 'Netlify'],
            caseStudy: {
                src: automic,
                alt: 'Migrating to a new platform?',
                video: automicVideo,
                desc: ' I seamlessly transitioned Automic Group\'s website from WordPress to HubSpot, providing ongoing support for optimization.'
            },
        }
    ];

    return (
        <Section sectionClassName="process" title="How I work">
            <button className="process__arrow process__arrow--left" onClick={scrollLeft}>&lt;</button>
            <div className="process__group" ref={scrollRef}>
                {
                    categories.map((category, categoryIndex) => (
                        <div className="process__item" key={categoryIndex}>
                            <h4 className="process__category">{category.category}</h4>
                            <p className="process__description">{category.description}</p>
                            <Tag list="Tools Used" arr={category.tools} />
                            <div className="process__image-wrapper">
                                <video className="process__video" autoPlay loop muted playsInline poster={category.caseStudy.src}>
                                    <source src={category.caseStudy.video} type="video/mp4" />
                                    <img className="process__image" src={category.caseStudy.src} alt={category.caseStudy.alt} />
                                </video>
                            </div>

                            <p className="process__image-text"><strong>{category.caseStudy.alt}</strong> {category.caseStudy.desc}</p>
                            <a className="process__link" href="/">Learn More</a>
                        </div>
                    ))
                }
            </div>
            <button className="process__arrow process__arrow--right" onClick={scrollRight}>&gt;</button>
        </Section>
    );
}

export default Process;