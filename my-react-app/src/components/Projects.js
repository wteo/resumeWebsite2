import React from 'react';

import Section from '../ui/Section';

import './Projects.scss';

// Large projects or companies
import etikette from '../assets/etikette.webp';
import etiketteVideo from '../assets/etikette.mp4';
import play from '../assets/play.webp';
import plico from '../assets/plico.webp';
import automic from '../assets/automic.webp';
import automicVideo from '../assets/automic.mp4';

// Landing pages
import blockchain from '../assets/blockchain.webp';
import tls from '../assets/tls.webp';
import gotsauss from '../assets/gotsauss.webp';

function Projects() {
    return (
        <Section sectionClassName="projects" title="How I Work">
            <div className="projects__group">
                <div className="projects__image-wrapper--large">
                    <video className="projects__video" autoPlay loop muted playsInline poster={etikette}>
                        <source src={etiketteVideo} type="video/mp4" />
                        <img className="projects__image" src={etikette} alt="Etikette" />
                    </video>
                    <p className="projects__image-description">Etikette Candles</p>
                </div>
                <div className="projects__image-wrapper--narrow">
                    <img className="projects__image" src={gotsauss} alt="Gotsauss" />
                    <p className="projects__image-description">Anthony "Gotsauss" Attapattu</p>
                </div>
                <div className="projects__image-wrapper cyan">
                    <img className="projects__image" src={plico} alt="Plico Energy" />
                    <p className="projects__image-description">Plico Energy</p>
                </div>
                <div className="projects__image-wrapper--large">
                    <video className="projects__video" autoPlay loop muted playsInline poster={automic}>
                        <source src={automicVideo} type="video/mp4" />
                        <img className="projects__image" src={automic} alt="Automic" />
                    </video>
                    <p className="projects__image-description">Automic Group</p>
                </div>
                <div className="projects__image-wrapper">
                    <img className="projects__image" src={blockchain} alt="Sydney Blockchain" />
                    <p className="projects__image-description">Sydney Blockchain</p>
                </div>
                <div className="projects__image-wrapper">
                    <img className="projects__image" src={tls} alt="The Lazy Society" />
                    <p className="projects__image-description">The Lazy Society</p>
                </div>
                <div className="projects__image-wrapper">
                    <img className="projects__image" src={play} alt="Play" />
                    <p className="projects__image-description">Play Innovation</p>
                </div>
            </div>
        </Section>
    );
}

export default Projects;