import React from 'react';

import './Form.scss';


function Form() {
    return (
        <div className="form__wrapper">
            <form className="form">
                <table className="form__table">
                    <tbody>
                        <tr className="form__row">
                            <td colSpan="2">
                                <h2 className="form__title">Get in Touch</h2>
                            </td>
                        </tr>
                        <tr className="form__row">
                            <td className="form__label">
                                <label htmlFor="name">Full Name *</label>
                            </td>
                            <td className="form__input">
                                <input type="text" id="name" name="name" required />
                            </td>
                        </tr>
                        <tr className="form__row">
                            <td className="form__label">
                                <label htmlFor="email">Email *</label>
                            </td>
                            <td className="form__input">
                                <input type="email" id="email" name="email" required />
                            </td>
                        </tr>
                        <tr className="form__row">
                            <td className="form__label">
                                <label htmlFor="phone">Phone</label>
                            </td>
                            <td className="form__input">
                                <input type="tel" id="phone" name="phone" />
                            </td>
                        </tr>
                        <tr className="form__row">
                            <td className="form__label">
                                <label htmlFor="subject">Project</label>
                            </td>
                            <td className="form__input">
                                <input type="text" id="subject" name="subject" />
                            </td>
                        </tr>
                        <tr className="form__row">
                            <td className="form__label">
                                <label htmlFor="message">Your Message *</label>
                            </td>
                            <td className="form__input">
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </td>
                        </tr>
                        <tr className="form__row">
                            <td colSpan="2" className="form__button-cell">
                                <button className="form__button">
                                    Submit <span className="form__button-icon">&#187;</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Form;