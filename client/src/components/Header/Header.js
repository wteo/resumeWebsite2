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
                            <li className={`header__menu-item ${location.pathname === '/' ? 'active' : ''}`}>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className={`header__menu-item ${location.pathname === '/projects' ? 'active' : ''}`}>
                                <Link to="projects">
                                    Selected Works
                                </Link>
                            </li>
                            <li className={`header__menu-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                                <Link to="contact">
                                    Work with Me
                                </Link>
                            </li>
                            <li className={`header__menu-item ${location.pathname === '/blogs' ? 'active' : ''}`}>
                                <Link to="https://medium.com/@wendyteo.wy" target="_blank" rel="noopener noreferrer">
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div 
                        className="header__mobile-bar" 
                        style={{ 
                            backdropFilter: `blur(${isHomePage ? '0' : '5'}px)`, 
                            WebkitBackdropFilter: `blur(${isHomePage ? '0' : '5'}px)`,
                        }} 
                    />
                    {menuOpen ? (
                        <span className="header__hamburger" onClick={toggleMenu}>&times;</span>
                    ) : (
                        <span className="header__hamburger" onClick={toggleMenu}>&#9776;</span>
                    )}
                </ContentWrapper>
                {
                    
                        <div className={`header__mobile-menu ${ menuOpen ? 'active' : '' }`}>
                            <ul className="header__mobile-menu-list">
                                <li className={`header__mobile-menu-item ${location.pathname === '/' ? 'active' : ''}`}>
                                    <Link to="/" onClick={toggleMenu}>
                                        Home
                                    </Link>
                                </li>
                                <li className={`header__mobile-menu-item ${location.pathname === '/projects' ? 'active' : ''}`}>
                                    <Link to="projects" onClick={toggleMenu}>
                                        Selected Works
                                    </Link>
                                </li>
                                <li className={`header__mobile-menu-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                                    <Link to="contact" onClick={toggleMenu}>
                                        Work with Me
                                    </Link>
                                </li>
                                <li className={`header__mobile-menu-item ${location.pathname === '/blogs' ? 'active' : ''}`}>
                                    <Link to="https://medium.com/@wendyteo.wy" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
                                        Read my Blogs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                }
            </header>
            {isHomePage && <Files />}
            { menuOpen && <div className="overlay" onClick={toggleMenu} /> }
        </>
    );
}

export default Header;
