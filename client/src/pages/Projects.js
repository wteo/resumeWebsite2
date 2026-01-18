import React from 'react';
import { Link } from 'react-router-dom';

import Section from '../ui/Section';

import './Projects.scss';

// CRM projects/Custom Quotes
import blastAwayGuys from '../assets/images/blast_away_guys.png';

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
        <>
            <Section sectionClassName="projects" title="CRM Integration & Custom Applications">
                <p>
                    Custom-built systems that automate business processes and integrate with CRM platforms. 
                    These projects eliminate manual workflows through automated quote generation, custom data management, 
                    and API development, helping sales teams work more efficiently while maintaining data accuracy across systems.
                </p>
                <div className="projects__group">
                    <Link className="projects__image-wrapper--large" to="/projects/bag">
                        <img className="projects__image" src={blastAwayGuys} alt="Blast Away Guys" />
                    </Link>
                    <div className="projects__image-wrapper--no-image" />
                    <div className="projects__image-wrapper--no-image" />
                </div>
            </Section>
            <Section sectionClassName="projects" title="Website Development">
                <p>
                    Website builds, migrations, and customizations that enhance online presence and user experience. 
                    Each project focuses on responsive design, performance optimization, and implementing features tailored to 
                    specific client needs and business goals.
                </p>
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
        </>
    );
}

export default Projects;