import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';
import Accordion from '../ui/Accordion';

import './Experience.scss';

function Experience() {

    const experiences = [
        {
            title: 'Web Developer, Freelancer',
            duration: 'Jul 2023 to Present',
            job: [{
                description: 'As a Freelance Web Developer, I specialize in creating custom web solutions. My services include migrating websites across various platforms, developing bespoke themes for platforms like Shopify, HubSpot, and WordPress, and providing comprehensive support throughout the entire web design and development process.',
                tasks: []
            }, {
                description: 'Present and past clients I have worked with include:',
                tasks: ['Automic Group', 'Etikette Candles', 'Plico Energy', 'Sydney Blockchain', 'and so forth']
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
                    'Optimized website performance through techniques such as code spliting, compression, & browser caching. i.e utilized Webpack to split React & non-React code for the NRMA branch finder page, improving loading speed by 20%.',
                    'Conducted cross-browser & device testing for consistent presentation & functionality across different platforms & screen sizes.'
                ]
            }]
        },
        {
            title: 'Finance Roles',
            duration: 'Before 2023',
            job: [{
                description: 'Accumulated 10 years of experience in financial roles, developing key skills in account management, credit control, & process automation in companies including IBM, Samsung Electronics, Hanson Constructions & Link Group.',
                tasks: []
            }],
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
