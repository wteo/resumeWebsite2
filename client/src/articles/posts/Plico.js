import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import plicoLaptop from '../../assets/images/plico_laptop.webp';
import plicoMobile from '../../assets/images/plico_mobile.webp';
import plicoModalVideo from '../../assets/videos/plico_modal.mp4';
import plicoModal from '../../assets/images/plico_modal.webp';
import plicoMenuVideo from '../../assets/videos/plico_menu.mp4';
import plicoMenu from '../../assets/images/plico_menu.webp';

function Plico() {

    const tags = ['HTML', 'CSS', 'JavaScript', 'HubSpot'];

    const url = 'https://www.plicoenergy.com.au/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: plicoLaptop,
        alt: 'Plico on a Macbook',
        video: null,
    }, {
        src: plicoMobile,
        alt: 'Plico on a mobile',
        video: null,
    },
    {
        src: plicoModal,
        alt: 'Plico Modal',
        video: plicoModalVideo,
        description: 'A modal for site visitor to select their geographic location. This affects the pricing of products.'
    }, {
        src: plicoMenu,
        alt: 'Plico mobile menu',
        video: plicoMenuVideo,
        description: 'Plico\'s navigation menu'
    }];

    return (
        <Section sectionClassName="article" title="Plico Energy">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Plico Energy, a leading energy provider in WA, needed a location-based modal on their website's global header to help users input their geographic location in Australia. This was crucial for adjusting their subscription pricing based on where the user was located. Since Plico currently only operates in a few key states like Victoria and WA, users from outside these areas needed to be redirected to an "Expression of Interest" form.
                    </p>
                    <p>
                        I built a modal that appears when users click the location icon, guiding them to either the relevant pricing details or the interest form, depending on their location. In addition, I have also customised other parts of their website components, such as the mobile navigation menu, accordions, and carousels, to better align with their needs.
                    </p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <ArticleMedia assets={assets} />
            </article>
        </Section>
    );
}

export default Plico;