import React from 'react';

import Diagram from '../../../components/Diagram';

function TechnicalCaseStudy() {
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
            <Diagram />
            <p>Want to learn more?</p>
            <a href="/">Click here</a>
        </div>
    );
}

export default TechnicalCaseStudy;