import React from 'react';

import Section from '../ui/Section';
import Tags from '../ui/Tags';

import './Article.scss';

import etiketteVideo from '../assets/etikette.mp4';
import etikette from '../assets/etikette.webp';
import plico from '../assets/plico.webp';
import play from '../assets/play.webp';
import gotsauss from '../assets/gotsauss.webp';
import blockchain from '../assets/blockchain.webp';



function Article() {

    const tags = ['HTML', 'CSS', 'JavaScript'];

    const images = [{
        src: etikette,
        alt: 'Etikette',
        video: etiketteVideo,
        description: 'Scroll through the layout of the website'
    },
    {
        src: plico,
        alt: 'plico',
        video: null,
        description: 'Lorem ipsum'
    }, {
        src: play,
        alt: 'play',
        video: null
    },
    {
        src: gotsauss,
        alt: 'gotsauss',
        video: null
    },
    {
        src: blockchain,
        alt: 'blockchain',
        video: null
    }];

    return (
        <Section sectionClassName="article" title="Add Article Title here">
            <div className="article__group">
                <div className="article__description">
                    <p>
                        kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m
                    </p>
                    <p>kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m</p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a href="/">https://www.etikette.com</a></p>
                </div>
                <div className="article__media">
                    {
                        images.map((image, index) => (
                            <>
                            <div className="article__image-wrapper" key={index}>
                                {
                                    image.video === null ?
                                        <img className="article__image" src={image.src} alt={image.alt} /> :
                                        <video className="article__video" autoPlay loop muted playsInline poster={image.src}>
                                            <source src={image.video} type="video/mp4" />
                                            <img className="article__image" src={etikette} alt="Etikette" />
                                        </video> 
                                }
                            </div>
                            <p className="article__image-description">{ image.description }</p>
                            </>))
                    }
                </div>
            </div>
        </Section>
    );
}

export default Article;