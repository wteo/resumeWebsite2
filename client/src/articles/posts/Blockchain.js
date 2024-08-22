import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import blockchainLaptop from '../../assets/images/blockchain_laptop.webp';
import blockchainMobile from '../../assets/images/blockchain_mobile.webp';

function Blockchain() {

    const tags = ['HTML', 'CSS', 'JavaScript', 'WordPress'];

    const url = 'https://blockchainsydney.org/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: blockchainLaptop,
        alt: 'Blockchain in Mac',
        video: null,
    }, {
        src: blockchainMobile,
        alt: 'Blockchain in mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Blockchain Sydney">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Blockchain Sydney needed a straightforward yet impactful landing page to engage visitors and provide essential information about their offerings. They chose WordPress as the platform for its ease of use and flexibility.
                    </p>
                    <p>
                        I designed and developed a clean, user-friendly landing page in WordPress that effectively communicated Blockchain Sydney’s message. The page was tailored to capture visitor interest and guide them towards taking action, whether signing up for more information or exploring their services.
                    </p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <ArticleMedia assets={assets} />
            </article>
        </Section>
    );
}

export default Blockchain;