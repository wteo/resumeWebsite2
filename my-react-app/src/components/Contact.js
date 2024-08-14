import React from 'react';

import Form from './Form';

import ContentContainer from '../ui/ContentWrapper';

import './Contact.scss';


function Contact() {
    return (
        <section className="contact">
            <ContentContainer>
                <div className="contact__content">
                    <h1 className="contact__title">
                        Get in Touch
                    </h1>
                    <hr />
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
                </div>
            </ContentContainer>
        </section>
    );
}

export default Contact;