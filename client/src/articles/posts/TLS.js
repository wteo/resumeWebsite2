import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import tlsLaptop from '../../assets/images/tls_laptop.webp';
import tlsMobile from '../../assets/images/tls_mobile.webp';

function TLS() {

    const tags = ['SASS', 'React', 'Netlify'];

    const url = 'https://info.thelazysociety.com/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: tlsLaptop,
        alt: 'TLS in laptop',
        video: null,
    }, {
        src: tlsMobile,
        alt: 'TLS in mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Building a Unified Online Presence">
            <article className="article__group">
                <div className="article__description">
                    <p>As a cryptocurrency enthusiast, I discovered "The Lazy Society" (TLS), an online community dedicated to educating people on cryptocurrency basics and trading. Although TLS had numerous resources spread across various URLs—blogs, social media, and a Discord channel—they lacked a unified landing page to streamline access and improve user experience.</p>
                    <p>To address this, I designed and developed a custom landing page from scratch using React, which serves as a comprehensive hub for TLS information.</p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Live Project: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <ArticleMedia assets={assets} />
            </article>
        </Section>
    );
}

export default TLS;