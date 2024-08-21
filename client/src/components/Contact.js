import React from 'react';

import Section from '../ui/Section';
import Form from '../ui/Form';

import './Contact.scss';


function Contact() {
    return (
        <Section sectionClassName="contact" title="Get in Touch">
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