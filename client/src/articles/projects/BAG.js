import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

// Design Layout
import BAGDesktopImage from '../../assets/images/BAG_desktop.png';
import BAGDesktopVideo from '../../assets/videos/BAG_desktop.mp4';
// import BAGMobileImage from '../../assets/images/BAG_mobile.png';
import BAGMobileVideo from '../../assets/videos/BAG_mobile.mp4';

// Demo on various components in quote functionalities
import BAGServicesImage from '../../assets/images/BAG_services.png';
import BAGServicesVideo from '../../assets/videos/BAG_services.mp4';
import BAGRoofTreatmentImage from '../../assets/images/BAG_roof_treatment.png';
import BAGRoofTreatmentVideo from '../../assets/videos/BAG_roof_treatment.mp4';
import BAGUpsellsImage from '../../assets/images/BAG_upsells.png';
import BAGUpsellsVideo from '../../assets/videos/BAG_upsells.mp4';
import BAGTotalCalculationImage from '../../assets/images/BAG_total_calculation.png';
import BAGTotalCalculationVideo from '../../assets/videos/BAG_total_calculation.mp4';
import BAGAgreementImage from '../../assets/images/BAG_agreement.png';
import BAGAgreementVideo from '../../assets/videos/BAG_agreement.mp4';

function Automic() {

    const tags = ['HubSpot CRM API v3', 'Hubspot CMS', 'HubL', 'Express / Node.js', 'Custom Quote Objects'];

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: BAGDesktopImage,
        alt: 'Desktop Quote Interface',
        video: BAGDesktopVideo,
        title: 'Desktop Quote Interface',
        description: 'The desktop layout displays client information, categorized service tables, and pricing summary with clear visual hierarchy separating mandatory services from optional upsells. The design maintains brand consistency while guiding customers through the quote logically.'
    },{
        src: BAGMobileVideo,
        alt: 'Mobile-Responsive Design',
        video: BAGMobileVideo,
        title: 'Mobile-Responsive Design',
        description: 'Demonstrates tablet-optimized interface for sales presentations. Features collapsible sections, vertical table layouts, touch-friendly controls, and a sticky pricing summary that updates in real-time across all device sizes.'
    },{
        src: BAGServicesImage,
        alt: 'Services Table (Mandatory Line Items)',
        video: BAGServicesVideo,
        title: 'Services Table (Mandatory Line Items)',
        description: 'Shows pre-selected, non-removable core services that form the base package. All checkboxes are disabled to communicate these items are included in every quote, with transparent pricing displayed for each service.'
    },{
        src: BAGRoofTreatmentImage,
        alt: 'Roof Treatment Table (Conditional Logic)',
        video: BAGRoofTreatmentVideo,
        title: 'Roof Treatment Table (Conditional Logic)',
        description: 'Demonstrates optional Roof Treatment upsell with required Single or Dual selection. System enforces dependency rules—customers must choose a treatment type if selecting Roof Treatment, with validation preventing invalid combinations.'
    },{
        src: BAGUpsellsImage,
        alt: 'Upsells/Add-ons Table (Optional Services)',
        video: BAGUpsellsVideo,
        title: 'Upsells/Add-ons Table (Optional Services)',
        description: 'Displays flexible add-on services with all items unselected by default. Customers can choose any combination independently, with detailed descriptions and clear pricing for each optional service.'
    },{
        src: BAGTotalCalculationImage,
        alt: 'Quote Total Calculation',
        video: BAGTotalCalculationVideo,
        title: 'Live Price Calculation Engine',
        description: 'Shows instant price updates as selections change. Every checkbox triggers immediate recalculation of subtotal, GST (15%), and total, providing real-time feedback without page refreshes.'
    },{
        src: BAGAgreementImage,
        alt: 'Quote Agreement',
        video: BAGAgreementVideo,
        title: 'Quote Acceptance and CRM Integration',
        description: 'Demonstrates the submission workflow from terms acceptance to CRM integration. Upon submission, the system creates HubSpot records, establishes associations, and updates the customer profile; all within seconds with instant confirmation.'
    }];

    return (
        <Section sectionClassName="article" title="Custom Quote System with HubSpot CRM Integration for Blast Away Guys">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Blast Away Guys needed an automated quote generation system that could handle complex service categorization while maintaining full integration with their HubSpot CRM. The challenge was creating a quote interface with three distinct service types: mandatory services that customers must purchase, conditional upsells with dependent options (like Roof Treatment requiring Single or Dual selection), and flexible add-ons.
                    </p>
                    <p>
                        To solve this, I built a full-stack solution with a Node.js backend API and custom HubSpot CMS theme. The backend acts as a bridge between the quote interface and HubSpot's CRM, handling product data extraction, caching for performance, and managing the quote acceptance workflow. I implemented custom JavaScript logic to enforce business rules for different service categories and developed a real-time price calculation engine that updates totals instantly as customers make selections.
                    </p>
                    <p>
                        The mobile-responsive design ensures sales team members can present quotes on tablets during client consultations. Upon quote acceptance, the system captures all selected items and posts data to the backend API, which creates records in custom HubSpot objects and updates the customer's CRM profile—providing the sales team with complete visibility into customer preferences and purchase intent.
                    </p>
                    <Tags list="Tools Used" arr={tags} />
                </div>
                <ArticleMedia assets={assets} isCarousel={true} />
            </article>
        </Section>
    );
}

export default Automic;