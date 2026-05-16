import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';
import Accordion from '../components/Accordion';

import './Experience.scss';

function Experience() {

    const experiences = [
        {
            title: 'Business Systems Integration Specialist, Freelancer',
            duration: 'Jul 2023 to Present',
            job: [{
                description: 'I connect your CRM, finance systems, and business applications so data flows automatically between them, eliminating manual entry and giving you real-time visibility. Core services:',
                tasks: [
                    'HubSpot custom integrations (quote generation, workflow automation, sales process optimization)',
                    'E-commerce operations automation (order management, fulfillment systems, logistics integration)',
                    'Finance system connections (reducing manual data entry, automating reconciliation processes)'
                ]
            }, {
                description: 'Clients: Blast Away Guys, Automic Group, Etikette Candles, Plico Energy, Sydney Blockchain',
                tasks: []
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
                    <h2 className="experience__title">Experience</h2>
                    <Accordion experiences={experiences} />
                </div>
            </ContentWrapper>
        </section>
    );
}

export default Experience;
