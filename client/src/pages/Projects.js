import React from 'react';
import { Link } from 'react-router-dom';

import Seo from '../components/Seo';
import { breadcrumbSchema } from '../schemas';
import Section from '../ui/Section';

import './Projects.scss';

// CRM projects/Custom Quotes
import hartwell from '../assets/images/hartwell.webp'
import blastAwayGuys from '../assets/images/blast_away_guys.webp';

// E Commerce
import vinificant from '../assets/images/vinificant_red_wine.webp';

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
            <Seo
                title="Selected Works"
                path="/projects"
                description="Case studies of HubSpot custom integrations, Shopify backend automation, and platform migrations. Selected works by Wendy Teo, Business Systems Integration Specialist."
                jsonLd={breadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'Selected Works', path: '/projects' }
                ])}
            />
            <Section sectionClassName="projects" headingLevel="h1" title="CRM & Finance Integration">
                <p>
                    Custom API integrations connecting HubSpot, finance systems, and business applications. Automates quote-to-cash workflows, eliminates manual data entry between systems, and builds custom CRM functionality for sales process optimization. Backend integration work focused on reliable system-to-system communication.
                </p>
                <div className="projects__group">
                    <Link className="projects__image-wrapper--large" to="/projects/hartwell">
                        <img className="projects__image" loading="lazy" width="1536" height="1024" src={hartwell} alt="Hartwell Mechanical Services — automated quote-to-CRM pipeline case study" />
                    </Link>
                    <Link className="projects__image-wrapper--narrow projects__image-wrapper" to="/projects/bag">
                        <img className="projects__image" loading="lazy" width="880" height="550" src={blastAwayGuys} alt="Blast Away Guys — custom quote system with HubSpot CRM integration" />
                    </Link>
                </div>
            </Section>
            <Section sectionClassName="projects" title="E-commerce Operations">
                <p>
                    Backend automation connecting online stores with warehouse and fulfillment systems. Building custom integrations for order management, inventory tracking, and logistics coordination.
                </p>
                <div className="projects__group">
                    <div className="projects__image-wrapper--full-width projects__image-wrapper--wip" to="/projects/vinificant">
                        <img className="projects__image" loading="lazy" width="1600" height="650" src={vinificant} alt="E-commerce operations integration — work in progress" />
                        <p className="projects__image-description big">Work in Progress</p>
                    </div>
                </div>
            </Section>
            <Section sectionClassName="projects" title="Platform Support">
                <p>
                    Website development, customizations, and migrations across Shopify, WordPress, and HubSpot. Includes theme customization, platform transitions, performance optimization, and ongoing website projects for existing clients.
                </p>
                <div className="projects__group">
                    <Link className="projects__image-wrapper--large" to="/projects/etikette">
                        <video className="projects__video" autoPlay loop muted playsInline poster={etikette}>
                            <source src={etiketteVideo} type="video/mp4" />
                            <img className="projects__image" loading="lazy" width="1857" height="1160" src={etikette} alt="Etikette Candles — Shopify theme customization case study" />
                        </video>
                    </Link>
                    <Link className="projects__image-wrapper--narrow" to="/projects/play">
                        <img className="projects__image" loading="lazy" width="1132" height="637" src={play} alt="Play Innovation — HubSpot CMS custom code case study" />
                    </Link>
                    <Link className="projects__image-wrapper cyan" to="/projects/plico">
                        <img className="projects__image" loading="lazy" width="262" height="180" src={plico} alt="Plico Energy — HubSpot CMS modal and UI enhancements" />
                    </Link>
                    <Link className="projects__image-wrapper--large" to="/projects/automic">
                        <img className="projects__image zoom" loading="lazy" width="2370" height="1439" src={automic} alt="Automic Group — WordPress to HubSpot migration case study" />
                    </Link>
                    <Link className="projects__image-wrapper white" to="/projects/blockchain">
                        <img className="projects__image" width="400" height="400" src={blockchain} alt="Blockchain Sydney — minimal WordPress landing page" />
                    </Link>
                    <Link className="projects__image-wrapper" to="/projects/gotsauss">
                        <img className="projects__image" loading="lazy" width="1214" height="1820" src={gotsauss} alt="Anthony Attapattu — VueJS landing page for a Sydney personal trainer" />
                        <p className="projects__image-description">Anthony Attapattu</p>
                    </Link>
                    <Link className="projects__image-wrapper ocean" to="/projects/tls">
                        <img className="projects__image" loading="lazy" width="220" height="194" src={tls} alt="The Lazy Society — React landing page for a cryptocurrency community" />
                    </Link>
                </div>
            </Section>
        </>
    );
}

export default Projects;