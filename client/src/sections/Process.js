import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Tag from '../components/Tag';

import Section from '../ui/Section';

import './Process.scss';

import blastAwayGuysDesktop from '../assets/images/BAG_desktop.png';
import blastAwayGuysDesktopVideo from '../assets/videos/BAG_desktop.mp4';
import blastAwayGuysRoofTreatment from '../assets/images/BAG_roof_treatment.png';
import blastAwayGuysRoofTreatmentVideo from '../assets/videos/BAG_roof_treatment.mp4';
import blastAwayGuysAgreement from '../assets/images/BAG_agreement.png';
import blastAwayGuysAgreementVideo from '../assets/videos/BAG_agreement.mp4';

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
        
        const handleResize = () => checkScroll();
        window.addEventListener('resize', handleResize);
        
        if (element) {
            element.addEventListener('scroll', checkScroll);
            return () => {
                element.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', handleResize);
            };
        }
        
        return () => window.removeEventListener('resize', handleResize);
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
            description: 'Understanding your operational pain points and system architecture. I map existing workflows, identify integration points, and document technical requirements for connecting your CRM, finance, and operations systems. This phase ensures the automation actually solves your business problems, not just adds complexity.',
            tools: [
                'Miro', 'Google Docs', 'Zoom', 'Jira'
            ],
            caseStudy: {
                src: blastAwayGuysDesktop,
                alt: 'Quote workflow requirements mapping',
                video: blastAwayGuysDesktopVideo,
                url: '/projects/bag',
                desc: 'Mapped Blast Away Guys\' complex quote workflow with three service types: mandatory services, conditional dependencies (Roof Treatment requiring Single/Dual selection), and flexible add-ons requiring distinct business logic.'
            },
        },
        {
            category: 'Development & Integration',
            description: 'Building the connections between your systems through custom API development and middleware. I handle authentication, data transformation, error handling, and business logic to ensure reliable system-to-system communication. Focus is backend integration architecture, not frontend interfaces.',
            tools: [
                'Node.js', 'Express', 'HubSpot API', 'REST APIs', 'JavaScript', 'JSON', 'Git'
            ],
            caseStudy: {
                src: blastAwayGuysRoofTreatment,
                alt: 'Complex business logic implementation',
                video: blastAwayGuysRoofTreatmentVideo,
                url: '/projects/bag',
                desc: 'Built Node.js backend API bridging quote interface to HubSpot CRM with product data caching, conditional selection enforcement, and real-time price calculation engine handling dependency validation.'
            },
        },
        {
            category: 'Testing & Deployment',
            description: 'Validating integrations through API testing, error scenario handling, and production load testing. Post-launch monitoring ensures data flows correctly and systems stay synchronized. Ongoing support handles edge cases and system updates as your business evolves.',
            tools: ['Postman', 'Error Logging', 'GitHub', 'Deployment Pipelines'],
            caseStudy: {
                src: blastAwayGuysAgreement,
                alt: 'CRM integration deployment',
                video: blastAwayGuysAgreementVideo,
                url: '/projects/bag',
                desc: 'Deployed quote acceptance workflow creating custom HubSpot objects, establishing CRM associations, and updating customer profiles automatically—eliminating manual data entry and providing complete sales visibility.'
            },
        }
    ];

    return (
        <Section sectionClassName="process" title="How I Work">
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

                            <p className="process__image-text"><strong>{category.caseStudy.alt}:</strong> {category.caseStudy.desc}</p>
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