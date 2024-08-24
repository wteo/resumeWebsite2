import React from 'react';
import { Link } from 'react-router-dom';

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
        <Section sectionClassName="projects" title="My Selected Works">
            <div className="projects__group">
                <Link className="projects__image-wrapper--large" to="/projects/etikette">
                    <video className="projects__video" autoPlay loop muted playsInline poster={etikette}>
                        <source src={etiketteVideo} type="video/mp4" />
                        <img className="projects__image" src={etikette} alt="Etikette" />
                    </video>
                </Link>
                <Link className="projects__image-wrapper--narrow" to="/projects/play">
                    <img className="projects__image" src={play} alt="Gotsauss" />
                </Link>
                <Link className="projects__image-wrapper cyan" to="/projects/plico">
                    <img className="projects__image" src={plico} alt="Plico Energy" />
                </Link>
                <Link className="projects__image-wrapper--large" to="/projects/automic">
                    <img className="projects__image zoom" src={automic} alt="Automic" />
                </Link>
                <Link className="projects__image-wrapper white" to="/projects/blockchain">
                    <img className="projects__image" src={blockchain} alt="Sydney Blockchain" />
                </Link>
                <Link className="projects__image-wrapper" to="/projects/gotsauss">
                    <img className="projects__image" src={gotsauss} alt="Gotsauss" />
                    <p className="projects__image-description">Anthony Attapattu</p>
                </Link>
                <Link className="projects__image-wrapper ocean" to="/projects/tls">
                    <img className="projects__image" src={tls} alt="The Lazy Society" />
                </Link>
            </div>
        </Section>
    );
}

export default Projects;