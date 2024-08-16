import React from 'react';

import Section from '../ui/Section';

import './Services.scss';

function Services() {

    const categories = [{
        category: 'Design & Development',
        servicelist: ['Custom Web Design', 'Website Development', 'Wireframing & Prototyping', 'UI/UX Design', 'Responsive Design']
    }, {
        category: 'E-commerce Solutions',
        servicelist: ['CMS Integration', 'Custom Themes']
    }, {
        category: 'Migration & Optimization',
        servicelist: ['Website Migration', 'Website Optimization', 'SEO Optimization', 'Content Migration']
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