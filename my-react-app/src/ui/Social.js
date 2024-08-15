import React from 'react';

import './Social.scss';

import gitHub from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Social() {

    const socials = [{
        url: 'https://www.github.com',
        src: linkedin,
        alt: 'LinkedIn'
    },{
        url: 'https://www.linkedin.com',
        src: gitHub,
        alt: 'Github'
    }];

    return (
        <div className="social">
            { socials.map((social, index) => (
                <a className="social__image-wrapper" key={index} href={social.url} target="_blank" rel="noreferrer">
                    <img className="social__image" src={social.src} alt={social.alt} />
                </a>
            ))}
        </div>
    );
}

export default Social;