import React from 'react';

import Section from '../ui/Section';
import Tags from '../ui/Tags';

import './Article.scss';

import plicoLaptop from '../assets/plico_laptop.webp';
import plicoMobile from '../assets/plico_mobile.webp';
import plicoModalVideo from '../assets/plico_modal.mp4';
import plicoModal from '../assets/plico_modal.webp';
import plicoMenuVideo from '../assets/plico_menu.mp4';
import plicoMenu from '../assets/plico_menu.webp';


function Article() {

    const tags = ['HTML', 'CSS', 'JavaScript'];

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const images = [{
        src: plicoLaptop,
        alt: 'Plico on a Macbook',
        video: null,
    },{
        src: plicoMobile,
        alt: 'Plico on a mobile',
        video: null,
    },
    {
        src: plicoModal,
        alt: 'Plico Modal',
        video: plicoModalVideo,
        description: 'A modal for site visitor to select their geographic location. This affects the pricing of products.'
    }, {
        src: plicoMenu,
        alt: 'Plico mobile menu',
        video: plicoMenuVideo,
        description: 'Mobile menu'
    }];

    return (
        <Section sectionClassName="article" title="Plico Energy">
            <div className="article__group">
                <div className="article__description">
                    <p>
                        kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m
                    </p>
                    <p>kjds lfksd flkjh dbsfjhbs fojhs bafjhb slnfb lsjkbdf sjnf sfjshb f,m</p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a target="_blank" rel="noopener noreferrer" href="https://www.plicoenergy.com.au/">https://www.plicoenergy.com.au/</a></p>
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
                            <p className="article__image-description">{ image.description ?? ''}</p>
                            </>))
                    }
                </div>
            </div>
        </Section>
    );
}

export default Article;