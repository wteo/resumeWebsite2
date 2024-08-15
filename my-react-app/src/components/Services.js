import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

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
        <section className="services">
            <ContentWrapper>
                <h1 className="services__title">Services</h1>
                <hr />
                <div className="services__group">
                    {
                        categories.map((category, categoryIndex) => (
                            <div className="services__category" key={categoryIndex}>
                                <h3 className="services__title">{category.category}</h3>
                                <ul className="services__list">
                                    {category.servicelist.map((service, serviceIndex) => <li key={serviceIndex}>{service}</li>)}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </ContentWrapper>
        </section>
    );
}

export default Services;