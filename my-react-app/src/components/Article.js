import React from 'react';

import ContentContainer from '../ui/ContentWrapper';

import './Article.scss';

import office from '../assets/office.webp'
import profile from '../assets/profile.webp'
import placeholder from '../assets/placeholder.webp'


function Article() {
    return (
        <section className="article">
            <ContentContainer>
                <div className="article__content">
                    <h1 className="article__content-title">
                        Add Article Title here
                    </h1>
                    <hr />
                    <div className="article__group">
                        <div className="article__description">
                            <p>
                                kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m
                            </p>
                            <p>kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m</p>
                        </div>
                        <div className="article__media">
                            <div className="article__image-wrapper">
                                <img className="article__image" src={ office } alt="blog" />
                            </div>
                            <div className="article__image-wrapper">
                                <img className="article__image" src={ profile } alt="blog" />
                            </div>
                            <div className="article__image-wrapper">
                                <img className="article__image" src={ placeholder } alt="blog" />
                            </div>
                            <div className="article__image-wrapper">
                                <img className="article__image" src={ placeholder } alt="blog" />
                            </div>
                            <div className="article__image-wrapper">
                                <img className="article__image" src={ placeholder } alt="blog" />
                            </div>
                            <div className="article__image-wrapper">
                                <img className="article__image" src={ placeholder } alt="blog" />
                            </div>
                            <div className="article__image-wrapper">
                                <img className="article__image" src={ placeholder } alt="blog" />
                            </div>
                            <div className="article__image-wrapper">
                                <img className="article__image" src={ placeholder } alt="blog" />
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}

export default Article;