import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

import './Header.scss';

function Header({ routeHandler }) {

    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const homeRouteHandler = () => routeHandler('home');
    const projectsRouteHandler = () => routeHandler('projects');
    const contactRouteHandler = () => routeHandler('contact');
    const blogsRouteHandler = () => routeHandler('blogs');

    return (
        <>
            <header className="header">
                <ContentWrapper>
                    <div className="header__container">
                        <h1 className="header__title" onClick={homeRouteHandler}>Wendy Teo</h1>
                        <ul className="header__menu-list">
                            <li className="header__menu-item" onClick={projectsRouteHandler}>Selected Works</li>
                            <li className="header__menu-item" onClick={contactRouteHandler}>Work with Me</li>
                            <li className="header__menu-item" onClick={blogsRouteHandler}>Blogs</li>
                        </ul>
                    </div>
                    <div className="header__mobile-bar"></div>
                    {menuOpen ? (
                        <span className="header__hamburger" onClick={toggleMenu}>&times;</span>
                    ) : (
                        <span className="header__hamburger" onClick={toggleMenu}>&#9776;</span>
                    )}
                </ContentWrapper>
                {
                    menuOpen && (
                        <div className="header__mobile-menu">
                            <ul className="header__mobile-menu-list">
                                <li className="header__mobile-menu-item" onClick={projectsRouteHandler}>Selected Works</li>
                                <li className="header__mobile-menu-item" onClick={contactRouteHandler}>Work with Me</li>
                                <li className="header__mobile-menu-item" onClick={blogsRouteHandler}>Read my Blogs</li>
                            </ul>
                        </div>
                    )}
            </header>
        </>
    );
}

export default Header;
