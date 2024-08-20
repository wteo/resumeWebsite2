import React from 'react';
import { useLocation } from 'react-router-dom'; 

import ContentWrapper from '../ui/ContentWrapper';

import Files from './Files';

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
                        <a href="/">
                            <h1 className="header__title" style={{ opacity: isHomePage ? '0' : '1' }}>Wendy Teo</h1>
                        </a>
                        <ul className="header__menu-list">
                            <a href="./projects"><li className="header__menu-item">Selected Works</li></a>
                            <a href="./contact"><li className="header__menu-item">Work with Me</li></a>
                            <a href="./blogs"><li className="header__menu-item">Blogs</li></a>
                        </ul>
                    </div>
                    <div className="header__mobile-bar" style={{ backdropFilter: `blur(${ isHomePage ? '0' : '5'}px)` }}></div>
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
                                <a href="./projects"><li className="header__mobile-menu-item">Selected Works</li></a>
                                <a href="./contact"><li className="header__mobile-menu-item">Work with Me</li></a>
                                <a href="./blogs"><li className="header__mobile-menu-item">Read my Blogs</li></a>
                            </ul>
                        </div>
                    )}
            </header>
            { isHomePage && <Files /> }
        </>
    );
}

export default Header;
