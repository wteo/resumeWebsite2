import React from 'react';
import { useState, useEffect } from 'react';

import Form from './Form';

import './Files.scss';

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
                <h3 className="file__title">Get In Touch</h3>
                <hr className="file__divider" />
                <p className="file__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, ligula eget bibendum fermentum, nulla metus facilisis enim, in efficitur eros purus in nisl. Vivamus interdum, felis id consequat ullamcorper, dui elit tincidunt velit, at efficitur sem orci sit amet lorem. Fusce euismod, mauris id convallis facilisis, erat orci congue neque, in sagittis mauris nulla non felis. Curabitur id dictum est, non varius turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Duis nec nisi at orci feugiat gravida.</p>
            </div>
            <div id="file__form" className="file forest" onClick={ () => routeHandler('contact') }>
                <Form />
            </div>
            <div className="file coral" onClick={ () => routeHandler('projects') }>
                <h3 className="file__title">My Selected Works</h3>
                <hr className="file__divider" />
                <p className="file__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, ligula eget bibendum fermentum, nulla metus facilisis enim, in efficitur eros purus in nisl. Vivamus interdum, felis id consequat ullamcorper, dui elit tincidunt velit, at efficitur sem orci sit amet lorem. Fusce euismod, mauris id convallis facilisis, erat orci congue neque, in sagittis mauris nulla non felis. Curabitur id dictum est, non varius turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Duis nec nisi at orci feugiat gravida.</p>
            </div>
            <div className="file lime" onClick={ () => routeHandler('profile') }>
                <h3 className="file__title">About Me</h3>
                <hr className="file__divider" />
                <p className="file__content">I’m Wendy Teo, a web developer with a background in finance and a passion for coding. After over a decade in finance, I transitioned to web development in 2021. I gained valuable experience as a Web Developer Intern at Insurance Australia Group, focusing on website optimization. Since August 2023, I’ve been freelancing, specializing in custom web solutions on platforms like Shopify, HubSpot, and WordPress, combining technical skills with business insight to deliver effective websites.</p>
            </div>
        </section>
    );
}

export default Files;