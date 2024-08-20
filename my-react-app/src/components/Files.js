import React from 'react';
import { useState, useEffect } from 'react';

import Social from '../ui/Social';
import Form from '../ui/Form';

import './Files.scss';
import './Projects.scss';

import etikette from '../assets/etikette.webp';
import automic from '../assets/automic.webp';
import gotsauss from '../assets/gotsauss.webp';
import play from '../assets/play.webp';

function Files({ onRoute }) {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Update lastScrollTop, never less than 0
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <section className="folder" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)', opacity: isVisible ? 1 : 0 }}>
            <div className="file yellow">
                <h3 className="file__title">Connect with Me</h3>
                <hr className="file__divider" />
                <hr className="file__divider" />
                <div className="file__content">
                    <Social />
                </div>
            </div>
            <div id="file__form" className="file forest" onClick={ onRoute.contactRouteHandler }>
                <Form />
            </div>
            <div className="file coral" onClick={ onRoute.projectsRouteHandler }>
                <h3 className="file__title">My Selected Works</h3>
                <hr className="file__divider" />
                <div className="file__content">
                    <div className="file__grid">
                        <div className="file__image-wrapper">
                            <img className="file__image" src={ etikette } alt="Etikette Candles" />
                        </div>
                        <div className="file__image-wrapper">
                            <img className="file__image" src={ automic } alt="Automic Group" />
                        </div>
                        <div className="file__image-wrapper">
                            <img className="file__image" src={ gotsauss } alt="Gotsauss" />
                        </div>
                        <div className="file__image-wrapper">
                            <img className="file__image" src={ play } alt="Play Innovation" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="file lime" onClick={ onRoute.blogsRouteHandler }>
                <h3 className="file__title">Read My Blogs</h3>
                <hr className="file__divider" />
                <p className="file__content">
                    Explore my in-depth analyses of personal and work projects, where I share challenges, solutions, and insights into the creative process.
                </p>
            </div>
        </section>
    );
}

export default Files;