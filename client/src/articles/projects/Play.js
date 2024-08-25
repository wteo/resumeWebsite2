import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import playLaptop from '../../assets/images/play_laptop.webp';
import playMobile from '../../assets/images/play_mobile.webp';

function Play() {

    const tags = ['HTML', 'CSS', 'JavaScript', 'HubSpot CMS', 'Hubl'];

    const url = 'https://www.playinnovation.com.au/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: playLaptop,
        alt: 'Play Innovation in Mac',
        video: null,
    }, {
        src: playMobile,
        alt: 'Play Innovation in mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Custom Code saves Play Innovation AUD$15K">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        To reduce costs, Play Innovation downgraded their Hubspot subscription, which led to the loss of key drag-and-drop 
                        features within their theme editor, such as editable blog templates and Call-to-Action buttons.
                    </p>
                    <p>
                        To main the website's design and functionality, I implemented custom solutions through careful code customization. 
                        Without compromising their brand's look and feel, this approach saved Play Innovation approximately AUD$15,000 annually.
                    </p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <ArticleMedia assets={assets} />
            </article>
        </Section>
    );
}

export default Play;