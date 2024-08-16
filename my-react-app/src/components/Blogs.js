import React from 'react';

import ContentContainer from '../ui/ContentWrapper';

import './Blogs.scss';

import placeholder from '../assets/placeholder.webp'

function Projects() {
    return (
        <section className="blogs">
            <ContentContainer>
                <div className="blogs__content">
                    <h1 className="blogs__content-title">
                        Blogs
                    </h1>
                    <hr />
                    <div className="blogs__group">
                        <div className="blogs__image-wrapper">
                            <img className="blogs__image" src={ placeholder } alt="blog" />
                            <p className="blogs__image-description">Image description</p>
                        </div>
                        <div className="blogs__image-wrapper">
                            <img className="blogs__image" src={ placeholder } alt="blog" />
                            <p className="blogs__image-description">Image description</p>
                        </div>
                        <div className="blogs__image-wrapper">
                            <img className="blogs__image" src={ placeholder } alt="blog" />
                            <p className="blogs__image-description">Image description</p>
                        </div>
                        <div className="blogs__image-wrapper">
                            <img className="blogs__image" src={ placeholder } alt="blog" />
                            <p className="blogs__image-description">Image description</p>
                        </div>
                        <div className="blogs__image-wrapper">
                            <img className="blogs__image" src={ placeholder } alt="blog" />
                            <p className="blogs__image-description">Image description</p>
                        </div>
                        <div className="blogs__image-wrapper">
                            <img className="blogs__image" src={ placeholder } alt="blog" />
                            <p className="blogs__image-description">Image description</p>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}

export default Projects;