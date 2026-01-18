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
                            I'm Wendy Teo, a web developer based in Sydney, Australia with over a decade of experience in accounts receivables and finance. After 10 years managing financial workflows and business operations, I transitioned to web development in 2021, bringing a unique perspective that bridges business processes and technical solutions. I gained valuable experience as a Web Developer Intern at Insurance Australia Group, focusing on website optimization.
                        </p>
                        <p>
                            Since August 2023, I've been freelancing with a focus on CRM integrations and custom business automation systems. In particular, quote generation, workflow automation, and sales process optimization. I also build custom websites on platforms like Shopify, HubSpot, and WordPress. My background in finance allows me to understand the business challenges clients face and translate them into effective technical solutions.
                        </p>
                        <p>
                            A fun fact about me: I'm multilingual and can speak four languages. These are English, Malay, Mandarin, and Hokkien. In my free time, I enjoy reading good books and exploring the outdoors through hiking and walking.
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