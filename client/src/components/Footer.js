import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

import './Footer.scss';

function Footer() {

    return (
        <footer className="footer">
            <ContentWrapper>
                <hr />
                <div className="footer__content">
                    <ul className="footer__menu">
                        <a href="./"><li className="footer__menu-item">Home</li></a>
                        <a href="./projects"><li className="footer__menu-item">My Work</li></a>
                        <a href="./contact"><li className="footer__menu-item">Contact</li></a>
                        <a href="./blogs"><li className="footer__menu-item">Blogs</li></a>
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