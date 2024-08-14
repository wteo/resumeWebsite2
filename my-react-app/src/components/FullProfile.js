import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

import Experience from './Experience';

import './FullProfile.scss';

import profile from '../assets/profile.webp';

function FullProfiles() {

    const descriptions = [
        'I\’m Wendy Teo, a freelance web developer with a unique background that combines over a decade of experience in finance with a strong passion for technology and coding. My journey into web development began in 2021, fueled by a desire to blend my analytical skills with creative problem-solving.',
        'Before diving into freelancing, I gained valuable experience as a Web Developer Intern at Insurance Australia Group. During this time, I worked on enhancing website performance, optimizing code, and collaborating with cross-functional teams to deliver high-quality web solutions. This experience not only honed my technical skills but also taught me the importance of teamwork and adaptability in a fast-paced environment.',
        'Since August 2023, I\’ve focused on freelancing, delivering customized web solutions across platforms like Shopify, HubSpot, and WordPress. My projects have included building custom websites, migrating sites from WordPress to HubSpot, and creating online stores in WordPress. My finance background allows me to approach projects with a strong business sense, ensuring that the websites I build are not only visually appealing but also strategically effective.',
        'I\’m committed to working closely with clients to understand their needs and bring their vision to life. If you\’re looking for a web developer who combines technical expertise with real-world business experience, let\’s connect and create something exceptional together.'
    ];
    return (
        <section className="profile">
            <ContentWrapper>
                <div className="profile__content">
                    <h1 className="profile__title">
                        About Me
                    </h1>
                    <hr />
                    <div className="profile__group">
                        <div className="profile__image-wrapper">
                            <img src={ profile } alt="Profile" className="profile__image" />
                        </div>
                        <div className="profile__description">
                            { descriptions.map(description => <p>{ description }</p>) }
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </section>
    );
}

export default FullProfiles;