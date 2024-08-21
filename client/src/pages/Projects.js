import React from 'react';

import Section from '../ui/Section';

import './Projects.scss';

// Large projects or companies
import etikette from '../assets/images/etikette.webp';
import etiketteVideo from '../assets/videos/etikette.mp4';
import play from '../assets/images/play.webp';
import plico from '../assets/images/plico.webp';
import automic from '../assets/images/automic.webp';

// Landing pages
import blockchain from '../assets/images/blockchain.webp';
import tls from '../assets/images/tls.webp';
import gotsauss from '../assets/images/gotsauss.webp';

function Projects() {
    return (
        <Section sectionClassName="projects" title="How I Work">
            <div className="projects__group">
                <a className="projects__image-wrapper--large" href="/">
                    <video className="projects__video" autoPlay loop muted playsInline poster={etikette}>
                        <source src={etiketteVideo} type="video/mp4" />
                        <img className="projects__image" src={etikette} alt="Etikette" />
                    </video>
                </a>
                <a className="projects__image-wrapper--narrow" href="/">
                    <img className="projects__image" src={play} alt="Gotsauss" />
                </a>
                <a className="projects__image-wrapper cyan" href="/">
                    <img className="projects__image" src={plico} alt="Plico Energy" />
                </a>
                <a className="projects__image-wrapper--large" href="/">
                    <img className="projects__image zoom" src={automic} alt="Automic" />
                </a>
                <a className="projects__image-wrapper white" href="/">
                    <img className="projects__image" src={blockchain} alt="Sydney Blockchain" />
                </a>
                <a className="projects__image-wrapper" href="/">
                    <img className="projects__image" src={gotsauss} alt="Gotsauss" />
                    <p className="projects__image-description">Anthony Attapattu</p>
                </a>
                <a className="projects__image-wrapper ocean" href="/">
                    <img className="projects__image" src={tls} alt="The Lazy Society" />
                </a>
            </div>
        </Section>
    );
}

export default Projects;