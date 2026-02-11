import { lazy, Suspense} from 'react';

import caseStudy from '../../../assets/case_study/hartwell_case_study_technical.pdf';

function TechnicalCaseStudy() {

    const Diagram = lazy(() => import('../../../components/Diagram'));

    return (
        <div>
            <p><strong>System Overview</strong></p>
            <p>
                The platform is a three-tier architecture. The presentation layer runs inside HubSpot CMS as 
                a custom quote theme with six modular HubL components. Client-side JavaScript handles interactivity, 
                real-time calculations, and state management. The application layer is a standalone Express API 
                that acts as a secure intermediary between the browser and HubSpot APIs. The data layer uses 
                HubSpot CRM for persistence, leveraging both standard objects (deals, contacts, companies, quotes, 
                line items) and two custom objects (Accepted Quotes, Selected Products).
            </p>
            <Suspense fallback={
                <div className="diagram-loading">
                    <div className="spinner" />
                </div>
            }>
                <Diagram />
            </Suspense>
            <p>Want to learn more?</p>
            <a href={caseStudy} target="_blank" rel="noopener noreferrer">Click here</a>
        </div>
    );
}

export default TechnicalCaseStudy;