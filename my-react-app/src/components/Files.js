import React from 'react';
import { useState, useEffect } from 'react';

import Social from '../ui/Social';
import Form from './Form';

import './Files.scss';
import './Projects.scss';

import office from '../assets/office.webp';

function Files({ routeHandler }) {

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
                <p className="file__content">
                    <Social />
                </p>
            </div>
            <div id="file__form" className="file forest" onClick={ () => routeHandler('contact') }>
                <Form />
            </div>
            <div className="file coral" onClick={ () => routeHandler('projects') }>
                <h3 className="file__title">My Selected Works</h3>
                <hr className="file__divider" />
                <p className="file__content">
                    <div className="file__grid">
                        <div className="file__image-wrapper">
                            <img className="file__image" src={ office } alt="project" />
                        </div>
                        <div className="file__image-wrapper">
                            <img className="file__image" src={ office } alt="project" />
                        </div>
                        <div className="file__image-wrapper">
                            <img className="file__image" src={ office } alt="project" />
                        </div>
                        <div className="file__image-wrapper">
                            <img className="file__image" src={ office } alt="project" />
                        </div>
                    </div>
                </p>
            </div>
            <div className="file lime" onClick={ () => routeHandler('blogs') }>
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