import React from 'react';

import Section from '../ui/Section';

import './Services.scss';

function Services() {

    const categories = [{
        category: 'CRM & Finance Integration',
        servicelist: ['HubSpot Custom Development & API Integration', 'Accounting Software Integration', 'Quote Generation & Sales Automation', 'Custom CRM Objects & Workflows', 'Multi-System Data Synchronization']
    }, {
        category: 'E-commerce Operations*',
        servicelist: ['Order Management System Integration', 'Fulfillment & Logistics Automation', 'Warehouse Management Connections', 'Inventory & Delivery Tracking Systems', 'Shopify Backend Integration'],
    }, {
        category: 'Platform Support',
        servicelist: ['Website Maintenance (Shopify, WordPress, HubSpot)', 'Platform Migrations', 'Performance Optimization', 'CMS Updates']
    }];

    return (
        <Section sectionClassName="services" title="Services">
            <div className="services__group">
                {
                    categories.map((category, categoryIndex) => (
                        <div className="services__category" key={categoryIndex}>
                            <h3 className="services__category-title">{category.category}</h3>
                            <ul className="services__list">
                                {category.servicelist.map((service, serviceIndex) => <li key={serviceIndex}>{service}</li>)}
                            </ul>
                        </div>
                    ))
                }
            </div>
            <p className="services__note">* Project currently in active development</p>
        </Section>
    );
}

export default Services;