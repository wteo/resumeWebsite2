import React from 'react';

import Section from '../ui/Section';

import './Services.scss';

function Services() {

    const categories = [{
        category: 'CRM Integration & Business Automation',
        servicelist: ['Custom Quote Systems', 'CRM Integration & Custom Objects', 'Workflow Automation', 'API Development', 'Business Process Optimization']
    }, {
        category: 'Website Development',
        servicelist: ['Custom Web Design', 'Website Development', 'Responsive Design', 'Custom Themes', 'UI/UX Design']
    }, {
        category: 'Platform Services',
        servicelist: ['Website Migration', 'CMS Integration', 'Website Optimization', 'SEO Optimization', 'Content Migration']
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
        </Section>
    );
}

export default Services;