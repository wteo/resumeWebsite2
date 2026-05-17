import React from 'react';

import Form from '../components/Form';
import Seo from '../components/Seo';
import { breadcrumbSchema } from '../schemas';

import Section from '../ui/Section';

import './Contact.scss';


function Contact() {
    const contactPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Wendy Teo',
        url: 'https://wendyteo.dev/contact',
        about: { '@id': 'https://wendyteo.dev/#person' }
    };
    const crumbs = breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' }
    ]);
    return (
        <Section sectionClassName="contact" headingLevel="h1" title="Get in Touch">
            <Seo
                title="Contact"
                path="/contact"
                description="Get in touch with Wendy Teo for HubSpot integrations, Shopify automation, and CRM-to-finance system projects. Based in Sydney, serving SMEs across APAC."
                jsonLd={[contactPageSchema, crumbs]}
            />
            <div className="contact__group">
                <div className="contact__description">
                    <p>
                        I take pride in building long-term professional relationships with clients, offering personalized solutions that meet your specific needs.
                    </p>
                    <p>
                        If you're interested in collaborating or have a project in mind, I'd love to hear from you.
                    </p>
                </div>
                <div className="form__wrapper">
                    <Form />
                </div>
            </div>

        </Section>
    );
}

export default Contact;