import React from 'react';

import Section from '../ui/Section';
import Tags from '../ui/Tags';

import './Article.scss';

import office from '../assets/office.webp'
import profile from '../assets/profile.webp'
import placeholder from '../assets/placeholder.webp'


function Article() {

    const tags=['HTML', 'CSS', 'JavaScript'];

    return (
        <Section sectionClassName="article" title="Add Article Title here">
            <div className="article__group">
                <div className="article__description">
                    <p>
                        kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m
                    </p>
                    <p>kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m</p>
                    <Tags list="Tools Used" arr={tags}/>
                </div>
                <div className="article__media">
                    <div className="article__image-wrapper">
                        <img className="article__image" src={office} alt="blog" />
                    </div>
                    <div className="article__image-wrapper">
                        <img className="article__image" src={profile} alt="blog" />
                    </div>
                    <div className="article__image-wrapper">
                        <img className="article__image" src={placeholder} alt="blog" />
                    </div>
                    <div className="article__image-wrapper">
                        <img className="article__image" src={placeholder} alt="blog" />
                    </div>
                    <div className="article__image-wrapper">
                        <img className="article__image" src={placeholder} alt="blog" />
                    </div>
                    <div className="article__image-wrapper">
                        <img className="article__image" src={placeholder} alt="blog" />
                    </div>
                    <div className="article__image-wrapper">
                        <img className="article__image" src={placeholder} alt="blog" />
                    </div>
                    <div className="article__image-wrapper">
                        <img className="article__image" src={placeholder} alt="blog" />
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Article;