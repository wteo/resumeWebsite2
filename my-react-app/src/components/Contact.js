import React from 'react';

import ContentContainer from '../ui/ContentWrapper';

import './Contact.scss';


function Contact() {
    return (
        <section className="contact">
            <ContentContainer>
                <div className="contact__content">
                    <h1 className="contact__title">
                        Work with Me
                    </h1>
                    <hr />
                    <div className="contact__group">
                        <div className="contact__description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, ligula eget bibendum fermentum, nulla metus facilisis enim, in efficitur eros purus in nisl. Vivamus interdum, felis id consequat ullamcorper, dui elit tincidunt velit, at efficitur sem orci sit amet lorem. Fusce euismod, mauris id convallis facilisis, erat orci congue neque, in sagittis mauris nulla non felis. Curabitur id dictum est, non varius turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Duis nec nisi at orci feugiat gravida.</p>
                        </div>
                        <div className="contact__form-wrapper">
                            <form className="contact__form">
                                <table className="contact__form-table">
                                    <tbody>
                                        <tr className="contact__form-row">
                                            <td colSpan="2">
                                                <h2 className="contact__form-title">Get in Touch</h2>
                                            </td>
                                        </tr>
                                        <tr className="contact__form-row">
                                            <td className="contact__form-label">
                                                <label htmlFor="name">Full Name *</label>
                                            </td>
                                            <td className="contact__form-input">
                                                <input type="text" id="name" name="name" required />
                                            </td>
                                        </tr>
                                        <tr className="contact__form-row">
                                            <td className="contact__form-label">
                                                <label htmlFor="email">Email *</label>
                                            </td>
                                            <td className="contact__form-input">
                                                <input type="email" id="email" name="email" required />
                                            </td>
                                        </tr>
                                        <tr className="contact__form-row">
                                            <td className="contact__form-label">
                                                <label htmlFor="phone">Phone</label>
                                            </td>
                                            <td className="contact__form-input">
                                                <input type="tel" id="phone" name="phone" />
                                            </td>
                                        </tr>
                                        <tr className="contact__form-row">
                                            <td className="contact__form-label">
                                                <label htmlFor="subject">Project</label>
                                            </td>
                                            <td className="contact__form-input">
                                                <input type="text" id="subject" name="subject" />
                                            </td>
                                        </tr>
                                        <tr className="contact__form-row">
                                            <td className="contact__form-label">
                                                <label htmlFor="message">Your Message *</label>
                                            </td>
                                            <td className="contact__form-input">
                                                <textarea id="message" name="message" rows="5" required></textarea>
                                            </td>
                                        </tr>
                                        <tr className="contact__form-row">
                                            <td colSpan="2" className="contact__button-cell">
                                                <button className="contact__button">
                                                    Submit <span className="contact__button-icon">&#187;</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}

export default Contact;