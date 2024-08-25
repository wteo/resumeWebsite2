import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Social from '../../Social';
import Form from '../../Form';
import BlogFile from './BlogFile';
import ProjectFile from './ProjectFile';

import './Files.scss';

function Files() {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const scrollThreshold = 50; // Adjust this value to set how much scrolling up is needed

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                setIsVisible(false);
            } 
            else if (lastScrollTop - currentScrollTop > scrollThreshold) {
                setIsVisible(true);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); 
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
            <Link id="file__form" className="file forest" to="contact">
                <Form />
            </Link>
            <ProjectFile />
            <BlogFile />
        </section>
    );
}

export default Files;