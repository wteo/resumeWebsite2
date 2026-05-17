import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';
import Accordion from '../components/Accordion';

import './Faq.scss';

export const faqsArr = [
    {
        question: 'What is a Business Systems Integration Specialist?',
        answer: "A Business Systems Integration Specialist connects a company's CRM, finance, e-commerce, and operational software so data flows automatically between them. Unlike a general developer, the role focuses on workflow design, API integration, and process automation rather than building user-facing applications. The work eliminates manual data entry, reduces errors, and gives teams real-time visibility across systems."
    },
    {
        question: 'What does a typical CRM integration project involve?',
        answer: 'A CRM integration project usually involves three phases: mapping the existing workflow and identifying integration points, building the API connections between the CRM and external systems (finance software, e-commerce platforms, custom databases), and validating the data flow under production conditions. Most projects take four to eight weeks depending on complexity. Common integrations include quote-to-cash automation, custom CRM objects, and finance system synchronisation.'
    },
    {
        question: 'How is a freelance Business Systems Integration Specialist different from an agency?',
        answer: 'A typical marketing or CRM agency operates with a team across multiple accounts and charges retainer fees starting at AUD$3,000+ per month. A freelance specialist works directly with the client, delivers fixed-scope projects without team overhead, and brings deeper domain knowledge in a specific area. Freelancers suit SMEs who need targeted integration work rather than ongoing marketing support.'
    },
    {
        question: 'How is integration work priced?',
        answer: 'Most projects are quoted as fixed-scope engagements after an initial discovery session, with pricing based on the number of systems being connected, data complexity, and required business logic. Ongoing maintenance and feature additions are billed separately. Hourly billing is avoided for integration work because it incentivises slow delivery over clean architecture.'
    },
    {
        question: 'Do you work with businesses outside Sydney?',
        answer: 'Yes. While based in Sydney, the work is delivered remotely across Australia and the wider APAC region. Multilingual support (English, Malay, Mandarin, Hokkien) extends to clients with operations in Malaysia, Singapore, and Greater China. On-site visits within Sydney are available when needed.'
    }
];

function Faq() {
    const faqs = faqsArr.map(faq => ({
        title: faq.question,
        duration: '',
        job: [{
            description: faq.answer,
            tasks: []
        }]
    }));

    return (
        <section className="faq">
            <ContentWrapper>
                <h2 className="faq__title">Frequently Asked Questions</h2>
                <Accordion experiences={faqs} />
            </ContentWrapper>
        </section>
    );
}

export default Faq;
