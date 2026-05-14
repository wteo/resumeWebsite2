import React from 'react';

import Seo from '../../components/Seo';
import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

// Design Layout
// import BAGDesktopImage from '../../assets/images/BAG_desktop.png';
import BAGDesktopVideo from '../../assets/videos/BAG_desktop.mp4';
import BAGMobileVideo from '../../assets/videos/BAG_mobile.mp4';

// Demo on various components in quote functionalities
// import BAGServicesImage from '../../assets/images/BAG_services.png';
import BAGServicesVideo from '../../assets/videos/BAG_services.mp4';
// import BAGRoofTreatmentImage from '../../assets/images/BAG_roof_treatment.png';
import BAGRoofTreatmentVideo from '../../assets/videos/BAG_roof_treatment.mp4';
// import BAGUpsellsImage from '../../assets/images/BAG_upsells.png';
import BAGUpsellsVideo from '../../assets/videos/BAG_upsells.mp4';
// import BAGTotalCalculationImage from '../../assets/images/BAG_total_calculation.png';
import BAGTotalCalculationVideo from '../../assets/videos/BAG_total_calculation.mp4';
// import BAGAgreementImage from '../../assets/images/BAG_agreement.png';
import BAGAgreementVideo from '../../assets/videos/BAG_agreement.mp4';

function Automic() {

    const tags = ['HubSpot CRM API v3', 'Hubspot CMS', 'HubL', 'Express / Node.js', 'Custom Quote Objects'];

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: BAGDesktopVideo,
        alt: 'Desktop Quote Interface',
        video: BAGDesktopVideo,
        title: 'Desktop Quote Interface',
        description: 'The desktop layout displays client information, categorized service tables, and a comprehensive pricing summary. The design incorporates clear visual hierarchy to separate mandatory services from optional upsells, making it easy for customers to understand their base package versus additional options. The interface maintains Blast Away Guys\' branding while guiding customers through the quote in a logical flow from included services to potential add-ons.'
    },{
        src: BAGMobileVideo,
        alt: 'Responsive Design (mobile)',
        video: BAGMobileVideo,
        title: 'Mobile-Responsive Design',
        description: 'Mobile-optimized interface for sales presentations. Tables are simplified with the removal of quantity and unit price columns to give the quote a simpler and more linear appearance on mobile screens.'
    },{
        src: BAGServicesVideo,
        alt: 'Services Table (Mandatory Line Items)',
        video: BAGServicesVideo,
        title: 'Services Table (Mandatory Line Items)',
        description: 'The Services table contains mandatory items that every quote must include. All checkboxes are pre-selected and disabled, visually communicating to customers that these core services are non-negotiable and included in the base price. Each line item displays service description, quantity, unit price, and line total, ensuring transparent pricing for the foundation of the service package.'
    },{
        src: BAGRoofTreatmentVideo,
        alt: 'Roof Treatment Table (Conditional Logic)',
        video: BAGRoofTreatmentVideo,
        title: 'Roof Treatment Table (Conditional Logic)',
        description: 'This demonstrates the conditional selection logic where Roof Treatment is an optional upsell that requires customers to choose either Single or Dual treatment if selected. The base Roof Treatment line item is priced at $0, with actual costs coming from the treatment type selection. The system enforces dependencies through validation logic—preventing customers from selecting Roof Treatment without choosing a type, and vice versa—while providing clear visual feedback to guide valid selections.'
    },{
        src: BAGUpsellsVideo,
        alt: 'Upsells/Add-ons Table (Optional Services)',
        video: BAGUpsellsVideo,
        title: 'Upsells/Add-ons Table (Optional Services)',
        description: 'The Upsells table shows optional add-on services that the sales team manually adds to quotes based on customer needs. All items are unselected by default, giving customers complete freedom to choose any combination without restrictions. Each upsell includes detailed descriptions to help customers understand the service benefits, with clear pricing displayed for easy cost comparison before making selections.'
    },{
        src: BAGTotalCalculationVideo,
        alt: 'Quote Total Calculation',
        video: BAGTotalCalculationVideo,
        title: 'Live Price Calculation Engine',
        description: 'The real-time price calculation updates instantly as customers make selections without requiring page refreshes. Every checkbox change triggers immediate recalculation of the subtotal, applies 15% GST, and displays the new total within milliseconds. The calculation engine handles complex scenarios like Roof Treatment dependencies, ensuring prices only reflect valid selections and giving customers instant feedback on how their choices affect the final price.'
    },{
        src: BAGAgreementVideo,
        alt: 'Quote Agreement',
        video: BAGAgreementVideo,
        title: 'Quote Acceptance and CRM Integration',
        description: 'After reviewing services and accepting terms and conditions, customers submit their selections to initiate the backend workflow. The system captures all selected line items and acceptance timestamp, then makes API calls to the Node.js backend. This creates an Accepted Quote record in HubSpot\'s custom objects, generates Selected Products records for each line item, establishes associations, and updates the customer\'s CRM profile,completing the entire process in seconds while providing instant confirmation and eliminating manual data entry for the sales team.'
    }];

    return (
        <>
        <Seo
            title="Custom Quote System with HubSpot CRM Integration — Blast Away Guys"
            path="/projects/bag"
            description="Case study: Node.js backend and custom HubSpot CMS theme delivering an automated quote system for Blast Away Guys with conditional upsells, real-time pricing, and CRM record creation."
        />
        <Section sectionClassName="article" title="Custom Quote System with HubSpot CRM Integration for Blast Away Guys">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Blast Away Guys needed an automated quote generation system with HubSpot CRM integration. The challenge was handling three service types: mandatory services, conditional upsells with dependencies (like Roof Treatment requiring Single or Dual selection), and flexible add-ons.
                    </p>
                    <p>
                        I built a Node.js backend API and custom HubSpot CMS theme. The backend bridges the quote interface and HubSpot's CRM, handling product data extraction, caching, and quote acceptance workflow. Custom JavaScript enforces business rules for service categories with real-time price calculation.
                    </p>
                    <p>
                        The mobile-responsive design enables tablet-based client consultations. Upon acceptance, the system posts data to the backend API, creates records in custom HubSpot objects, and updates the CRM profile, providing complete visibility into customer preferences and purchase intent.                    </p>
                    <Tags list="Tools Used" arr={tags} />
                </div>
                <ArticleMedia assets={assets} isCarousel={true} />
            </article>
        </Section>
        </>
    );
}

export default Automic;