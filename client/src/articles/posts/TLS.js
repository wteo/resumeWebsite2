import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import tlsLaptop from '../../assets/images/tls_laptop.webp';
import tlsMobile from '../../assets/images/tls_mobile.webp';

function TLS() {

    const tags = ['SASS', 'JavaScript', 'React', 'GitHub', 'Netlify'];

    const url = 'https://info.thelazysociety.com/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: tlsLaptop,
        alt: 'The Lazy Society in laptop',
        video: null,
    }, {
        src: tlsMobile,
        alt: 'The Lazy Society in mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Building a Unified Online Presence for The Lazy Society">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        As a cryptocurrency enthusiast, I discovered "The Lazy Society" (TLS), an online community focused on educating people about 
                        cryptocurrency basics and trading. Despite having numerous resources spread across blogs, social media, and a Discord channel, 
                        TLS lacked a unified landing page to streamline access and improve user experience.
                    </p>
                    <p>
                        To address this, I designed and developed a custom landing page from scratch using React, creating a comprehensive hub for all 
                        TLS information. This project was part of my web development learning journey, done voluntarily at no cost to the community, 
                        and which I continue to maintain it to this day.
                    </p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Live Project: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <ArticleMedia assets={assets} />
            </article>
        </Section>
    );
}

export default TLS;