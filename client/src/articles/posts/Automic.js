import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';

import '../templates/Article.scss';

import automicLaptop from '../../assets/images/automic_laptop.webp';
import automicMobile from '../../assets/images/automic_mobile.webp';

function Article() {

    const tags = ['HTML', 'CSS', 'JavaScript'];

    const url = 'https://www.automicgroup.com.au/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const images = [{
        src: automicLaptop,
        alt: 'Automic in Mac',
        video: null,
    },{
        src: automicMobile,
        alt: 'Automic in mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Automic Group">
            <article className="article__group">
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
            </article>
        </Section>
    );
}

export default Article;