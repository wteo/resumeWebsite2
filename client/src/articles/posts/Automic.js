import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import automicLaptop from '../../assets/images/automic_laptop.webp';
import automicMobile from '../../assets/images/automic_mobile.webp';

function Automic() {

    const tags = ['HTML', 'CSS', 'JavaScript', 'HubSpot', 'Hubl'];

    const url = 'https://www.automicgroup.com.au/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: automicLaptop,
        alt: 'Automic Group in Mac',
        video: null,
    },{
        src: automicMobile,
        alt: 'Automic Group in mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Cost-Effective WordPress to HubSpot Migration for Automic Group">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Automic Group planned a website migration from WordPress to HubSpot with a strict budget. 
                        To keep costs down, we selected a HubSpot theme that closely matched their existing design, 
                        minimizing the need for customizations. 
                        I rebuilt most of the website’s pages using HubSpot’s drag-and-drop editor, prioritizing on a no-code approach.
                    </p>
                    <p>
                        For elements requiring custom code, such as fade-in text animations, adding buttons to card modules, and integrating 
                        a Login Button in the Global Header, I identified these needs and communicated them to the client for budget approval. 
                        This method ensured a cost-effective migration while preserving the site's functionality and design.
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