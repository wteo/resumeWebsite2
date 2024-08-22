import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import automicLaptop from '../../assets/images/automic_laptop.webp';
import automicMobile from '../../assets/images/automic_mobile.webp';

function Automic() {

    const tags = ['HTML', 'CSS', 'JavaScript', 'HubSpot'];

    const url = 'https://www.automicgroup.com.au/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
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
                        Automic Group needed to migrate their website from WordPress to HubSpot to leverage HubSpot's powerful marketing and CRM tools. They tasked me with rebuilding most of their existing pages within the HubSpot environment, ensuring a smooth transition while preserving their brand identity.
                    </p>
                    <p>
                        I successfully recreated the majority of their website pages in HubSpot, maintaining consistency with the original design and functionality. Additionally, I developed a couple of custom blog templates tailored to their content needs, enabling them to manage and publish blog posts more efficiently within the HubSpot platform.
                    </p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <ArticleMedia assets={assets} />
            </article>
        </Section>
    );
}

export default Automic;