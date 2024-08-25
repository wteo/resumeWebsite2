import React from 'react';

import './Social.scss';

import gitHub from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';

function Social() {

    const socials = [{
        url: 'https://linkedin.com/in/wendy-teo-36821461',
        src: linkedin,
        alt: 'LinkedIn'
    },{
        url: 'https://github.com/wteo/',
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