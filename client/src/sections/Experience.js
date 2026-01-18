import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';
import Accordion from '../components/Accordion';

import './Experience.scss';

function Experience() {

    const experiences = [
        {
            title: 'Full Stack Developer, Freelancer',
            duration: 'Jul 2023 to Present',
            job: [{
                description: 'As a Freelance Developer, I specialize in CRM integrations and custom business automation systems, alongside web development solutions. My services include building automated quote generation systems with CRM integration, developing custom workflows and business process automation, migrating websites across various platforms, creating bespoke themes for Shopify, HubSpot, and WordPress, and providing comprehensive support throughout the entire development process.',
                tasks: []
            }, {
                description: 'Present and past clients I have worked with include:',
                tasks: ['Blast Away Guys', 'Automic Group', 'Etikette Candles', 'Plico Energy', 'Sydney Blockchain', 'and so forth']
            },{
                description: 'If I’ve piqued your interest, I encourage you to dive into my portfolio page and explore my selected works.',
                tasks: []
            }]
        },
        {
            title: 'Web Developer Intern, Insurance Australia Group',
            duration: 'Jan 2023 to Jul 2023',
            job: [{
                description: '',
                tasks: [
                    'Developed & maintained responsive web pages & components using HTML, CSS, & JavaScript. Participated in Agile development processes, including daily stand-ups & sprint planning meetings. Collaborated with UI/UX designers, content creators, product owners & full stack developers to implement updates & maintain NRMA website.', 
                    'Managed website with CMS Drupal 7 & refactored legacy scripts in preparation for migration to Adobe Experience Manager. i.e Refactored an accordion component from ES5 with JQuery to just JavaScript ES6, reducing code lines by 45%.', 
                    'Optimized website performance through techniques such as code splitting, compression, & browser caching. i.e utilized Webpack to split React & non-React code for the NRMA branch finder page, improving loading speed by 20%.',
                    'Conducted cross-browser & device testing for consistent presentation & functionality across different platforms & screen sizes.'
                ]
            }]
        },
        {
            title: 'Finance & Accounts Receivables Roles',
            duration: 'Before 2023',
            job: [{
                description: 'Accumulated 10 years of experience in accounts receivables and financial operations across IBM, Samsung Electronics, Hanson Constructions & Link Group. During this time, I received multiple Employee of the Month awards, broke company collection records, and contributed to improving AR collection systems from the user perspective; identifying workflow inefficiencies and advocating for process improvements.',
                tasks: []
            }, {
                description: 'This hands-on experience managing quote-to-cash workflows, credit control, and financial operations now informs my approach to building CRM integrations and business automation systems. I understand the pain points, bottlenecks, and user needs because I\'ve lived them, which allows me to create solutions that genuinely improve how teams work, not just add technology for technology\'s sake.',
                tasks: []
            },],
        }
    ];

    return (
        <section className="experience">
            <ContentWrapper>
                <div className="experience__content">
                    <h1 className="experience__title">My Experience</h1>
                    <Accordion experiences={experiences} />
                </div>
            </ContentWrapper>
        </section>
    );
}

export default Experience;
