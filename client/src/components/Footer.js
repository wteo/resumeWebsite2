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
                        <li className="footer__menu-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link to="projects">My Work</Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link to="contact">Contact</Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link to="https://medium.com/@wendyteo.wy" target="_blank" rel="noopener noreferrer">Blogs</Link>
                        </li>
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