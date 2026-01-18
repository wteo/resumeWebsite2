import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Tag from '../components/Tag';

import Section from '../ui/Section';

import './Process.scss';

import blastAwayGuys from '../assets/images/BAG_desktop.png';
import blastAwayGuysVideo from '../assets/videos/BAG_desktop.mp4';
import etikette from '../assets/images/etikette.webp';
import etiketteVideo from '../assets/videos/etikette.mp4';
import automic from '../assets/images/automic.webp';
import automicVideo from '../assets/videos/automic.mp4';

function Process() {


    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        const element = scrollRef.current;
        if (element) {
            element.addEventListener('scroll', checkScroll);
            return () => element.removeEventListener('scroll', checkScroll);
        }
    }, []);

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
            description: 'Every successful project starts with understanding your business challenges and goals. In the discovery phase, I collaborate with you to define requirements, map existing workflows, and create a strategic plan—whether building a CRM integration, automating business processes, or developing a custom website. This foundation ensures the solution truly addresses your operational needs.',
            tools: [
                'Miro', 'Google Docs', 'Zoom', 'Jira',
            ],
            caseStudy: {
                src: blastAwayGuys,
                alt: 'Automating quote workflows',
                video: blastAwayGuysVideo,
                url: '/projects/bag',
                desc: 'Built a custom quote generation system with HubSpot CRM integration for Blast Away Guys, automating their entire sales workflow from quote to acceptance.'
            },
        },
        {
            category: 'Design & Development',
            description: 'This phase brings your solution to life, whether that\'s building API integrations, developing custom CRM workflows, or creating responsive websites. I combine frontend and backend development to deliver systems that are both user-friendly and technically robust. From data architecture to user interfaces, every component is built to work seamlessly together.',
            tools: [
                'Node.js', 'Express', 'HubSpot API', 'REST APIs', 'JavaScript', 'React', 'HTML', 'CSS', 'Figma', 'Shopify', 'WordPress', 'HubSpot CMS'
            ],
            caseStudy: {
                src: etikette,
                alt: 'Brighten your online presence!',
                video: etiketteVideo,
                url: '/projects/etikette',
                desc: 'Partnered with a UI/UX designer to craft a custom Shopify theme for Etikette, a family-owned candle business, revitalizing their online storefront.'
            },
        },
        {
            category: 'Testing & Launch',
            description: 'Before deployment, I rigorously test across devices, browsers, and use cases, validating API integrations, workflow automation, and user interfaces. Once everything performs optimally, I handle the launch and provide ongoing support to ensure your system continues running smoothly and adapts as your business evolves.',
            tools: ['BrowserStack', 'Postman', 'Google Lighthouse / Analytics', 'GitHub', 'Netlify'],
            caseStudy: {
                src: automic,
                alt: 'Migrating to a new platform?',
                video: automicVideo,
                url: '/projects/automic',
                desc: 'Seamlessly transitioned Automic Group\'s website from WordPress to HubSpot, providing ongoing support for optimization.'
            },
        }
    ];

    return (
        <Section sectionClassName="process" title="How I work">
            {showLeftArrow && <button className="process__arrow process__arrow--left" onClick={scrollLeft}>&lt;</button>}
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
                            <Link className="process__link" to={category.caseStudy.url}>Learn More</Link>
                        </div>
                    ))
                }
            </div>
            {showRightArrow && <button className="process__arrow process__arrow--right" onClick={scrollRight}>&gt;</button>}
        </Section>
    );
}

export default Process;