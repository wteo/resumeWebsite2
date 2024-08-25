import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ContentWrapper from '../../ui/ContentWrapper';

import Files from './Files/Files';

import './Header.scss';

function Header() {

    const location = useLocation(); // Gets the current path location
    const isHomePage = location.pathname === '/';

    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className="header">
                <ContentWrapper>
                    <div className="header__container">
                        <Link to="/">
                            <h1 className="header__title" style={{ opacity: isHomePage ? '0' : '1' }}>Wendy Teo</h1>
                        </Link>
                        <ul className="header__menu-list">
                            <Link to="/">
                                <li className={`header__menu-item ${location.pathname === '/' ? 'active' : ''}`}>Home</li>
                            </Link>
                            <Link to="projects">
                                <li className={`header__menu-item ${location.pathname === '/projects' ? 'active' : ''}`}>Selected Works</li>
                            </Link>
                            <Link to="contact">
                                <li className={`header__menu-item ${location.pathname === '/contact' ? 'active' : ''}`}>Work with Me</li>
                            </Link>
                            <Link to="https://medium.com/" target="_blank" rel="noopener noreferrer">
                                <li className={`header__menu-item ${location.pathname === '/blogs' ? 'active' : ''}`}>Blogs</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="header__mobile-bar" style={{ backdropFilter: `blur(${isHomePage ? '0' : '5'}px)` }}></div>
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
                                <Link to="/">
                                    <li className={`header__mobile-menu-item ${location.pathname === '/' ? 'active' : ''}`}>Home</li>
                                </Link>
                                <Link to="projects">
                                    <li className={`header__mobile-menu-item ${location.pathname === '/projects' ? 'active' : ''}`}>Selected Works</li>
                                </Link>
                                <Link to="contact">
                                    <li className={`header__mobile-menu-item ${location.pathname === '/contact' ? 'active' : ''}`}>Work with Me</li>
                                </Link>
                                <Link to="https://medium.com/" target="_blank" rel="noopener noreferrer">
                                    <li className={`header__mobile-menu-item ${location.pathname === '/blogs' ? 'active' : ''}`}>Read my Blogs</li>
                                </Link>
                            </ul>
                        </div>
                    )}
            </header>
            {isHomePage && <Files />}
        </>
    );
}

export default Header;
