import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from './ArticleMedia';

import './Article.scss';

import etiketteOldLaptop from '../../assets/images/etikette_old_laptop.webp';
import etiketteOldMobile from '../../assets/images/etikette_old_mobile.webp';
import etiketteNewLaptop from '../../assets/images/etikette_new_laptop.webp';
import etiketteNewMobile from '../../assets/images/etikette_new_mobile.webp';
import etiketteBanner from '../../assets/images/etikette_banner.webp';
import etiketteBannerVideo from '../../assets/videos/etikette_banner.mp4';
import etikettePagination from '../../assets/images/etikette_pagination.webp';
import etikettePaginationVideo from '../../assets/videos/etikette_pagination.mp4';

function Article() {

    const tags = ['Figma', 'Shopify', 'Liquid', 'JavaScript'];

    const url = 'https://etikettecandles.com/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
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
            <article className="article__group">
                <div className="article__description">
                    <p>
                        kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m
                    </p>
                    <p>kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m</p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <ArticleMedia assets={assets} />
            </article>
        </Section>
    );
}

export default Article;