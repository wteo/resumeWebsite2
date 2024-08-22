import React from 'react';
import { Link } from 'react-router-dom';

import ContentWrapper from '../ui/ContentWrapper';

import './Footer.scss';

function Footer() {

    return (
        <footer className="footer">
            <ContentWrapper>
                <hr />
                <div className="footer__content">
                    <ul className="footer__menu">
                        <Link to="/"><li className="footer__menu-item">Home</li></Link>
                        <Link to="projects"><li className="footer__menu-item">My Work</li></Link>
                        <Link to="contact"><li className="footer__menu-item">Contact</li></Link>
                        <Link to="blogs"><li className="footer__menu-item">Blogs</li></Link>
                    </ul>
                    <div className="footer__contact">
                        <p className="footer__contact-detail">hello@wendyteo.dev</p>
                        <p className="footer__contact-detail">+61 458 369 510</p>
                    </div>
                </div>
                <p className="footer__copyright">© Wendy Teo 2024</p>
            </ContentWrapper>
        </footer>
    );
}

export default Footer;