import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

import './Footer.scss';

function Footer({ routeHandler }) {

    const homeRouteHandler = () => routeHandler('home');
    const projectsRouteHandler = () => routeHandler('projects');
    const contactRouteHandler = () => routeHandler('contact');

    return (
        <footer className="footer">
            <ContentWrapper>
                <hr />
                <div className="footer__content">
                    <ul className="footer__menu">
                        <li className="footer__menu-item" onClick={ homeRouteHandler }>Home</li>
                        <li className="footer__menu-item" onClick={ projectsRouteHandler }>My Work</li>
                        <li className="footer__menu-item" onClick={ contactRouteHandler }>Contact</li>
                        <li className="footer__menu-item">Blogs</li>
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