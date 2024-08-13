import React from 'react';

import ContentContainer from '../ui/ContentWrapper';

import './Projects.scss';

import pen from '../assets/pen.webp';
import office from '../assets/office.webp';
import profile from '../assets/profile.webp';


function Projects() {
    return (
        <section className="projects">
            <ContentContainer>
                <div className="projects__content">
                    <h1 className="projects__content-title">
                        My Selected Work
                    </h1>
                    <hr />
                    <div className="projects__group">
                        <div className="projects__image-wrapper--large">
                            <img className="projects__image" src={ office } alt="project" />
                            <p className="projects__image-description">Image description</p>
                        </div>
                        <div className="projects__image-wrapper--narrow">
                            <img className="projects__image" src={ profile } alt="project" />
                            <p className="projects__image-description">Image description</p>
                        </div>
                        <div className="projects__image-wrapper">
                            <img className="projects__image" src={ office } alt="project" />
                            <p className="projects__image-description">Image description</p>
                        </div>
                        <div className="projects__image-wrapper--large">
                            <img className="projects__image" src={ pen } alt="project" />
                            <p className="projects__image-description">Image description</p>
                        </div>
                        <div className="projects__image-wrapper">
                            <img className="projects__image" src={ office } alt="project" />
                            <p className="projects__image-description">Image description</p>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}

export default Projects;