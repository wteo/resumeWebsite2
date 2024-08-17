import React from 'react';

import Section from '../ui/Section';

import './Projects.scss';

import pen from '../assets/pen.webp';
import office from '../assets/office.webp';
import profile from '../assets/profile.webp';


function Projects() {
    return (
        <Section sectionClassName="projects" title="How I Work">
            <div className="projects__group">
                <div className="projects__image-wrapper--large">
                    <img className="projects__image" src={office} alt="project" />
                    <p className="projects__image-description">Image description</p>
                </div>
                <div className="projects__image-wrapper--narrow">
                    <img className="projects__image" src={profile} alt="project" />
                    <p className="projects__image-description">This is an exceptionally long image description</p>
                </div>
                <div className="projects__image-wrapper">
                    <img className="projects__image" src={office} alt="project" />
                    <p className="projects__image-description">Image description</p>
                </div>
                <div className="projects__image-wrapper--large">
                    <img className="projects__image" src={pen} alt="project" />
                    <p className="projects__image-description">Image description</p>
                </div>
                <div className="projects__image-wrapper">
                    <img className="projects__image" src={office} alt="project" />
                    <p className="projects__image-description">Image description</p>
                </div>
            </div>
        </Section>
    );
}

export default Projects;