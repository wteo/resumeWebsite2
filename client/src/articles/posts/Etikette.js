import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import etiketteOldLaptop from '../../assets/images/etikette_old_laptop.webp';
import etiketteOldMobile from '../../assets/images/etikette_old_mobile.webp';
import etiketteNewLaptop from '../../assets/images/etikette_new_laptop.webp';
import etiketteNewMobile from '../../assets/images/etikette_new_mobile.webp';
import etiketteBanner from '../../assets/images/etikette_banner.webp';
import etiketteBannerVideo from '../../assets/videos/etikette_banner.mp4';
import etikettePagination from '../../assets/images/etikette_pagination.webp';
import etikettePaginationVideo from '../../assets/videos/etikette_pagination.mp4';

function Etikette() {

    const tags = ['Figma', 'Shopify', 'Liquid', 'JavaScript'];

    const url = 'https://etikettecandles.com/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: etiketteNewLaptop,
        alt: 'New Etikette Design on a Macbook',
        video: null,
        description: 'Etikette New Design'
    }, {
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
                        Etikette Candles wanted to refresh their online presence with a modern, user-friendly design. To achieve this, I collaborated with a UI/UX designer to redesign their Shopify website, focusing on improving the user experience and enhancing the brand's visual appeal.
                    </p>
                    <p>
                        Working closely with the UI/UX designer, I implemented the new design in Shopify, ensuring that the site was not only aesthetically pleasing but also functional and easy to navigate. My responsibilities included integrating custom design elements, optimizing the site for performance, and ensuring seamless responsiveness across all devices.
                    </p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <ArticleMedia assets={assets} />
            </article>
        </Section>
    );
}

export default Etikette;