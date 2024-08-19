import React from 'react';

import Section from '../ui/Section';
import Tags from '../ui/Tags';

import './Article.scss';

import etiketteOldLaptop from '../assets/etikette_old_laptop.webp';
import etiketteOldMobile from '../assets/etikette_old_mobile.webp';
import etiketteNewLaptop from '../assets/etikette_new_laptop.webp';
import etiketteNewMobile from '../assets/etikette_new_mobile.webp';
import etiketteBanner from '../assets/etikette_banner.webp';
import etiketteBannerVideo from '../assets/etikette_banner.mp4';
import etikettePagination from '../assets/etikette_pagination.webp';
import etikettePaginationVideo from '../assets/etikette_pagination.mp4';

function Article() {

    const tags = ['HTML', 'CSS', 'JavaScript'];

    const url = 'https://etikettecandles.com/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const images = [{
        src: etiketteNewLaptop,
        alt: 'New Etikette Design on a Macbook',
        video: null,
        description: 'Etikette New Design'
    },{
        src: etiketteNewMobile,
        alt: 'New Etikette Design on a mobile',
        video: null,
        description: 'Etikette New Design'
    },
    {
        src: etiketteOldLaptop,
        alt: 'Old Etikette Design on a Macbook',
        video: null,
        description: 'Etikette\'s old design in a Macbook'
    }, {
        src: etiketteOldMobile,
        alt: 'Old Etikette Design on a mobile',
        video: null,
        description: 'Etikette\'s old design in an Iphone'
    }, {
        src: etiketteBanner,
        alt: 'Etikette Banner',
        video: etiketteBannerVideo,
    }, {
        src: etikettePagination,
        alt: 'Etikette Pagination',
        video: etikettePaginationVideo,
    }];

    return (
        <Section sectionClassName="article" title="Etikette Candles">
            <div className="article__group">
                <div className="article__description">
                    <p>
                        kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m
                    </p>
                    <p>kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m</p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <div className="article__media">
                    {
                        images.map((image, index) => (
                            <>
                            <div className="article__image-wrapper" key={index}>
                                {
                                    image.video === null ?
                                        <img className={`article__image ${image.alt.includes('mobile') ? "mobile" : ''}` } src={image.src} alt={image.alt} /> :
                                        <video className="article__video" autoPlay loop muted playsInline poster={image.src}>
                                            <source src={image.video} type="video/mp4" />
                                            <img className="article__image" src={image.src} alt={image.alt} />
                                        </video> 
                                }
                            </div>
                            <p className="article__image-description">{ image.description ?? '' }</p>
                            </>))
                    }
                </div>
            </div>
        </Section>
    );
}

export default Article;