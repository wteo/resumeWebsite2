import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import blockchainLaptop from '../../assets/images/blockchain_laptop.webp';
import blockchainMobile from '../../assets/images/blockchain_mobile.webp';

function Blockchain() {

    const tags = ['WordPress', 'SeedProd', 'WPForms'];

    const url = 'https://blockchainsydney.org/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: blockchainLaptop,
        alt: 'Blockchain Sydney in Mac',
        video: null,
    }, {
        src: blockchainMobile,
        alt: 'Blockchain Sydney in mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Blockchain Sydney: Creating a minimal landing page in WordPress">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Blockchain Sydney needed a simple landing page to inform visitors about their organization, with easy content management. 
                        WordPress was chosen for its user-friendliness, using only a couple of plugins, including a form builder.
                    </p>
                    <p>
                        I managed the entire no-code process, from design and development to deployment. 
                        The landing page features a clean, minimalist design with a color scheme of blue and white, black for text, and 
                        green for call-to-action buttons.
                    </p>
                    <p>
                        The website includes standard sections such as an About page, contact form, and vision statement, as well as an information 
                        page on upcoming and past events, tailored for a small yet growing community group.                    
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