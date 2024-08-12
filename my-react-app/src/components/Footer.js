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
                        <li className="footer__menu-item">Link 1</li>
                        <li className="footer__menu-item">Link 2</li>
                        <li className="footer__menu-item">Link 3</li>
                        <li className="footer__menu-item">Link 4</li>
                    </ul>
                    <div className="footer__contact">
                        <p className="footer__contact-detail">hello@wendyteo.dev</p>
                        <p className="footer__contact-detail">+61 458 369 510</p>
                    </div>
                </div>
                <p className="footer__copyright">Copyright</p>
            </ContentWrapper>
        </footer>
    );
}

export default Footer;