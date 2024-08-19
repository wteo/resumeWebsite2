import React from 'react';

import Section from '../ui/Section';

import './Projects.scss';

// Large projects or companies
import etikette from '../assets/etikette.webp';
import etiketteVideo from '../assets/etikette.mp4';
import play from '../assets/play.webp';
import plico from '../assets/plico2.webp';
import automic from '../assets/automic2.webp';

// Landing pages
import blockchain from '../assets/blockchain2.webp';
import tls from '../assets/tls2.webp';
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
                </div>
                <div className="projects__image-wrapper--narrow">
                    <img className="projects__image" src={play} alt="Gotsauss" />
                </div>
                <div className="projects__image-wrapper cyan">
                    <img className="projects__image" src={plico} alt="Plico Energy" />
                </div>
                <div className="projects__image-wrapper--large">
                    <img className="projects__image zoom" src={automic} alt="Automic" />
                </div>
                <div className="projects__image-wrapper white">
                    <img className="projects__image" src={blockchain} alt="Sydney Blockchain" />
                </div>
                <div className="projects__image-wrapper">
                    <img className="projects__image" src={gotsauss} alt="Gotsauss" />
                    <p className="projects__image-description">Anthony Attapattu</p>
                </div>
                <div className="projects__image-wrapper ocean">
                    <img className="projects__image" src={tls} alt="The Lazy Society" />
                </div>
            </div>
        </Section>
    );
}

export default Projects;