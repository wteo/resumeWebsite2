import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import playLaptop from '../../assets/images/play_laptop.webp';
import playMobile from '../../assets/images/play_mobile.webp';

function Play() {

    const tags = ['HTML', 'CSS', 'JavaScript', 'HubSpot'];

    const url = 'https://www.playinnovation.com.au/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: playLaptop,
        alt: 'Play in Mac',
        video: null,
    }, {
        src: playMobile,
        alt: 'Play in mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Play Innovation">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Play Innovation faced the challenge of downgrading their website in HubSpot, which resulted in the loss of several key features, including the critical CTA buttons. To ensure the website maintained its original design and functionality, they needed a custom solution.
                    </p>
                    <p>
                        I stepped in to customize the necessary elements, including recreating the CTA buttons that were no longer available in the downgraded version. My goal was to preserve the website’s visual consistency and user experience despite the reduced feature set.
                    </p>
                    <p>
                        Through careful customization, I was able to retain the website’s design integrity and ensure that the essential functions, like CTA buttons, remained effective. This allowed Play Innovation to continue engaging users without compromising on their brand’s look and feel, even after the downgrade.
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