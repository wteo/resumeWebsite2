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

    const tags = ['HTML', 'CSS', 'JavaScript', 'HubSpot CMS', 'Hubl'];

    const url = 'https://www.plicoenergy.com.au/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: plicoModal,
        alt: 'Plico Energy Modal',
        video: plicoModalVideo,
        description: 'Demo of the location modal I built for Plico Energy.'
    }, {
        src: plicoMenu,
        alt: 'Plico Energy mobile menu',
        video: plicoMenuVideo,
        description: 'Plico Energy\'s mobile navigation menu.'
    }, {
        src: plicoLaptop,
        alt: 'Plico Energy on a Macbook',
        video: null,
    }, {
        src: plicoMobile,
        alt: 'Plico Energy on a mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Creating a Modal & Further UI Enhancements for Plico Energy">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Plico Energy, a leading energy provider in WA, required a modal on their website's global header to enable users to input their geographic location within Australia. This was essential for adjusting subscription pricing based on the user's location. Since Plico currently operates primarily in VIC and WA, users outside these areas needed to be redirected to an "Expression of Interest" form.
                    </p>
                    <p>
                        As an ongoing client, Plico Energy has also benefited from continuous website customizations that I have implemented to better align with their evolving needs. These updates have included enhancements to the mobile navigation menu, accordions, and carousels, ensuring the site remains user-friendly.
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