import { useState } from 'react';

import './Form.scss';


function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const validate = (name, value) => {
        switch (name) {
            case 'name':
                if (value.length < 3) {
                    return 'Name must be at least 3 characters long';
                }
                break;
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) {
                    return 'Email must be a valid email address';
                }
                break;
            case 'message':
                if (value.length < 5) {
                    return 'Please enter a valid message.';
                }
                break;
            default:
                return '';
        }
        return '';
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setFormErrors({
            ...formErrors,
            [name]: ''
        });
    };

    const [formResponse, setFormResponse] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate all fields before submitting
        const newErrors = {
            name: validate('name', formData.name),
            email: validate('email', formData.email),
            message: validate('message', formData.message)
        };
        setFormErrors(newErrors);

        // Check if there are any errors
        if (!Object.values(newErrors).some(error => error)) {

            const url = process.env.REACT_APP_URL_API_FORMSPREE;

            // Form submission logic here
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })

                .then(response => {

                    setIsFormSubmitted(true);

                    if (response.ok) {
                        setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            subject: '',
                            message: ''
                        });
                        setFormResponse('Thank you for sending us a message. We\'ll be in touch soon!');
                    } else {
                        setFormResponse('Apologies! We are facing a sever issue. Please try again later.');
                        throw new Error('Network response was not ok.');
                    }
                })
                .catch(error => {
                    console.log(error);
                    setFormResponse('Apologies! We are facing a sever issue. Please try again later.');
                });
        }
    };


    return (
        <form className="form" onSubmit={handleSubmit} onClick={() => setIsFormSubmitted(false)}>
            <table className="form__table">
                <tbody>
                    <tr className="form__row">
                        <td colSpan="2">
                            <h2 className="form__title">Work with Me</h2>
                        </td>
                    </tr>
                    <tr className="form__row">
                        <td className="form__label">
                            <label htmlFor="name">Full Name *</label>
                        </td>
                        <td className="form__input">
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr className="form__row">
                        <td className="form__label">
                            <label htmlFor="email">Email *</label>
                        </td>
                        <td className="form__input">
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr className="form__row">
                        <td className="form__label">
                            <label htmlFor="phone">Phone</label>
                        </td>
                        <td className="form__input">
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className="form__row">
                        <td className="form__label">
                            <label htmlFor="subject">Project</label>
                        </td>
                        <td className="form__input">
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr className="form__row">
                        <td className="form__label">
                            <label htmlFor="message">Your Message *</label>
                        </td>
                        <td className="form__input">
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr className="form__row">
                        <td colSpan="2" className="form__button-cell">
                            <button className="form__button" type="submit">
                                Submit <span className="form__button-icon">&#187;</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="form__error-wrapper">
                {isFormSubmitted && <p className="form__error">{formResponse}</p>}
                {formErrors.name && <p className="form__error">{formErrors.name}</p>}
                {formErrors.email && <p className="form__error">{formErrors.email}</p>}
                {formErrors.message && <p className="form__error">{formErrors.message}</p>}
            </div>
        </form>
    );
}

export default Form;