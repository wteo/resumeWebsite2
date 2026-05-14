import React from 'react';

import Form from '../components/Form';
import Seo from '../components/Seo';

import Section from '../ui/Section';

import './Contact.scss';


function Contact() {
    return (
        <Section sectionClassName="contact" title="Get in Touch">
            <Seo
                title="Contact"
                path="/contact"
                description="Get in touch with Wendy Teo for HubSpot integrations, Shopify automation, and CRM-to-finance system projects. Based in Sydney, serving SMEs across APAC."
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