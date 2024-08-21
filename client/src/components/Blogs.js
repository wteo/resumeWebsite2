import React from 'react';

import Section from '../ui/Section';

import './Blogs.scss';

import placeholder from '../assets/placeholder.webp'

function Projects() {
    return (
        <Section sectionClassName="blogs" title="Blogs">
            <div className="blogs__group">
                <div className="blogs__image-wrapper">
                    <img className="blogs__image" src={placeholder} alt="blog" />
                    <p className="blogs__image-description">Image description</p>
                </div>
                <div className="blogs__image-wrapper">
                    <img className="blogs__image" src={placeholder} alt="blog" />
                    <p className="blogs__image-description">Image description</p>
                </div>
                <div className="blogs__image-wrapper">
                    <img className="blogs__image" src={placeholder} alt="blog" />
                    <p className="blogs__image-description">Image description</p>
                </div>
                <div className="blogs__image-wrapper">
                    <img className="blogs__image" src={placeholder} alt="blog" />
                    <p className="blogs__image-description">Image description</p>
                </div>
                <div className="blogs__image-wrapper">
                    <img className="blogs__image" src={placeholder} alt="blog" />
                    <p className="blogs__image-description">Image description</p>
                </div>
                <div className="blogs__image-wrapper">
                    <img className="blogs__image" src={placeholder} alt="blog" />
                    <p className="blogs__image-description">Image description</p>
                </div>
            </div>
        </Section>
    );
}

export default Projects;