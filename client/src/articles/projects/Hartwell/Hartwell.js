import { useState } from 'react';

import Seo from '../../../components/Seo';
import { articleSchema, breadcrumbSchema } from '../../../schemas';
import Section from '../../../ui/Section';
import BusinessCaseStudy from './BusinessCaseStudy';
import TechnicalCaseStudy from './TechnicalCaseStudy';

import '../../templates/Article.scss';
import './Hartwell.scss';


function Hartwell() {

    const [isCaseStudyTechnical, setIsCaseStudyTechnical] = useState(false);

    return (
        <>
        <Seo
            title="Automated Quote-to-CRM Pipeline — Hartwell Mechanical Services"
            path="/projects/hartwell"
            description="Case study: Interactive Quote Platform transforming HubSpot-generated quotes into self-service web experiences for Hartwell Mechanical Services, with automatic CRM record creation and 50/50 deposit-balance invoicing."
            jsonLd={[
                articleSchema({
                    headline: 'Automated Quote-to-CRM Pipeline for Hartwell Mechanical Services',
                    description: 'Interactive Quote Platform transforming HubSpot-generated quotes into self-service web experiences, with automatic CRM record creation and 50/50 deposit-balance invoicing.',
                    path: '/projects/hartwell'
                }),
                breadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'Selected Works', path: '/projects' },
                    { name: 'Hartwell Mechanical Services', path: '/projects/hartwell' }
                ])
            ]}
        />
        <Section sectionClassName="article" headingLevel="h1" title="Automated Quote-to-CRM Pipeline for Hartwell Mechanical Services">
            <div className="article__tab-container">
                <button 
                    className={`article__tab-button ${!isCaseStudyTechnical ? 'active' : ''}`}
                    onClick={() => setIsCaseStudyTechnical(false)}
                >
                    For the Business Mind
                </button>
                <button 
                    className={`article__tab-button ${isCaseStudyTechnical ? 'active' : ''}`}
                    onClick={() => setIsCaseStudyTechnical(true)}
                >
                    For the Technical Mind
                </button>
            </div>
            { !isCaseStudyTechnical && <BusinessCaseStudy /> }
            { isCaseStudyTechnical && <TechnicalCaseStudy /> }
        </Section>
        </>
    );
}

export default Hartwell;