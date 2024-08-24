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

    const tags = ['Figma', 'Shopify', 'Liquid', 'JavaScript', 'GitHub'];

    const url = 'https://etikettecandles.com/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: etiketteNewLaptop,
        alt: 'New Etikette Design on a Macbook',
        video: null,
        description: 'Etikette new design'
    }, {
        src: etiketteNewMobile,
        alt: 'New Etikette Design on a mobile',
        video: null,
        description: 'Etikette new design'
    },
    {
        src: etiketteOldLaptop,
        alt: 'Old Etikette Design on a Macbook',
        video: null,
        description: 'Etikette old design'
    }, {
        src: etiketteOldMobile,
        alt: 'Old Etikette Design on a mobile',
        video: null,
        description: 'Etikette old design'
    }, {
        src: etiketteBanner,
        alt: 'Etikette Banner',
        video: etiketteBannerVideo,
        description: 'In the original theme, this banner lacked the option to add a heading title in the drag and drop theme editor, which I later incorporated.'
    }, {
        src: etikettePagination,
        alt: 'Etikette Pagination',
        video: etikettePaginationVideo,
        description: 'The featured collection initially lacked dot indicators. At the UI/UX designer\'s request, I added this design element, incorporating custom JavaScript work.'
    }];

    return (
        <Section sectionClassName="article" title="Modernizing Etikette's Online Presence">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Etikette Candles aimed to modernize their online presence with a more user-friendly Shopify design. 
                        To achieve this, I collaborated with a UI/UX designer to select and customize a theme that matched 
                        the client's vision.
                    </p>
                    <p>
                        For instance, the original theme offered limited background colour options. To better align with the brand, 
                        I enhanced it by adding the flexibility to choose any background colours across sections of the site.
                    </p>
                    <p>
                        Additionally, I optimized site performance and ensured full responsiveness across all devices, 
                        delivering a sleek, modern experience that reflects the brand's identity.
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