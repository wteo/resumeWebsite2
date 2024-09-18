import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

import './About.scss';

import profile from '../assets/images/selfie.jpg';

function About({ routeHandler }) {
    return (
        <section className="about">
            <ContentWrapper>
                <h1 className="about__title">Wendy Teo</h1>
                <hr className="about__divider" />
                <hr className="about__divider" />
                <div className="about__group">
                    <div className="about__description">
                        <h1>Quick Profile</h1>
                        <p>
                            I’m Wendy Teo, a web developer dased in Sydney, Australia with a background in finance and a passion for coding. 
                            After over a decade in finance, I transitioned to web development in 2021. 
                            I gained valuable experience as a Web Developer Intern at Insurance Australia Group, focusing on website optimization. 
                            Since August 2023, I’ve been freelancing, specializing in custom web solutions on platforms like Shopify, HubSpot, 
                            and WordPress, combining technical skills with business insight to deliver effective websites.
                        </p>
                        <p>
                            A fun fact about me: I’m multilingual and can speak four languages—English, Malay, Mandarin, and Hokkien. 
                            In my free time, I enjoy reading good books and exploring the outdoors through hiking and walking.
                        </p>
                        <a href="https://drive.google.com/file/d/1FY9URTPxcKEhpVrBAo9ZlLT9eBkX5w_Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
                    </div>
                    <div className="about__image-wrapper">
                        <img src={ profile } alt="Profile" className="about__image" />
                    </div>
                </div>
            </ContentWrapper>
        </section>
    );
}

export default About;