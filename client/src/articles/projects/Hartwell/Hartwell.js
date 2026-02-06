import { useState } from 'react';

import Section from '../../../ui/Section';
import BusinessCaseStudy from './BusinessCaseStudy';
import TechnicalCaseStudy from './TechnicalCaseStudy';

import '../../templates/Article.scss';
import './Hartwell.scss';


function Hartwell() {

    const [isCaseStudyTechnical, setIsCaseStudyTechnical] = useState(false);

    return (
        <Section sectionClassName="article" title="Automated Quote-to-CRM Pipeline for Harwell Mechanical Services">
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
    );
} 

export default Hartwell;