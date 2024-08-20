import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

import Files from './Files';

import './Header.scss';

function Header({ routeHandler }) {

    const [menuOpen, setMenuOpen] = React.useState(false);
    const [isNameHidden, setIsNameHidden] = React.useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const homeRouteHandler = () => {
        routeHandler('home');
        setIsNameHidden(true);
    }
    const projectsRouteHandler = () => {
        routeHandler('projects');
        setIsNameHidden(false);        
    }
    const contactRouteHandler = () => { 
        routeHandler('contact');
        setIsNameHidden(false);        
    }
    const blogsRouteHandler = () => {
        routeHandler('blogs');
        setIsNameHidden(false);        
    }

    return (
        <>
            <header className="header">
                <ContentWrapper>
                    <div className="header__container">
                        <h1 className="header__title" onClick={homeRouteHandler} style={{ opacity: `${ isNameHidden ? '0': '1'}` }}>Wendy Teo</h1>
                        <ul className="header__menu-list">
                            <li className="header__menu-item" onClick={projectsRouteHandler}>Selected Works</li>
                            <li className="header__menu-item" onClick={contactRouteHandler}>Work with Me</li>
                            <li className="header__menu-item" onClick={blogsRouteHandler}>Blogs</li>
                        </ul>
                    </div>
                    <div className="header__mobile-bar" style={{ backdropFilter: `blur(${ isNameHidden ? '0' : '5'}px)` }}></div>
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
            { isNameHidden && <Files onRoute={{projectsRouteHandler, contactRouteHandler, blogsRouteHandler}}/> }
        </>
    );
}

export default Header;
