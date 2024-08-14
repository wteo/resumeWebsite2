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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, ligula eget bibendum fermentum, nulla metus facilisis enim, in efficitur eros purus in nisl. Vivamus interdum, felis id consequat ullamcorper, dui elit tincidunt velit, at efficitur sem orci sit amet lorem. Fusce euismod, mauris id convallis facilisis, erat orci congue neque, in sagittis mauris nulla non felis. Curabitur id dictum est, non varius turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Duis nec nisi at orci feugiat gravida.</p>
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