import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

import './Header.scss';

function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className="header">
                <ContentWrapper>
                    <div className="header__container">
                        <h1 className="header__title">Wendy Teo</h1>
                        <ul className="header__menu-list">
                            <li className="header__menu-item">About Me</li>
                            <li className="header__menu-item">Selected Works</li>
                            <li className="header__menu-item">Work with Me</li>
                            <li className="header__menu-item">Blogs</li>
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
                                <li className="header__mobile-menu-item">About Me</li>
                                <li className="header__mobile-menu-item">Selected Works</li>
                                <li className="header__mobile-menu-item">Work with Me</li>
                                <li className="header__mobile-menu-item">Read my Blogs</li>
                            </ul>
                        </div>
                    )}
            </header>
        </>
    );
}

export default Header;
