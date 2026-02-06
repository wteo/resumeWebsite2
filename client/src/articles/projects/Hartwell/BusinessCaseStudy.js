import React from "react";

import ArticleMedia from "../../templates/ArticleMedia";

import hartwellImageDemo from '../../../assets/images/BAG_desktop.png';
import hartwellImageVideo from '../../../assets/videos/BAG_desktop.mp4';

import caseStudy from '../../../assets/case_study/hartwell_case_study_business.pdf';

function BusinessCaseStudy() {

    const assets = [{
        src: hartwellImageDemo,
        alt: 'Video Demo on Harwell Quote-to-CRM Pipeline',
        video: hartwellImageVideo,
        title: '',
        description: 'Video Demo on Harwell Quote-to-CRM Pipeline'
    }];

  return (
    <article className="article__group">
        <div className="article__description">
            <p><strong>Executive Summary</strong></p>
            <p>
                Hartwell Merchanical Services needed to move beyond
                static PDF quotes that required manual follow-up, phone calls to
                confirm selections, and error-prone re-keying of data into their CRM.
                Their sales team was spending hours per week on administrative quote
                processing instead of selling.
            </p>
            <p>
                I designed and built an Interactive Quote Platform that transforms
                HubSpot-generated quotes into self-service web experiences. Customers
                can now view mandatory services, toggle optional add-ons, see prices
                update in real-time, and formally accept their quote, all from a
                single branded page. On acceptance, the system automatically creates
                CRM records, generates invoices with a 50/50 deposit-balance split,
                and links everything together without any manual data entry.
            </p>
            <p>Want to learn more?</p>
            <a href={caseStudy}>Click here</a>
        </div>
        <ArticleMedia assets={assets} />
    </article>
  );
}

export default BusinessCaseStudy;
