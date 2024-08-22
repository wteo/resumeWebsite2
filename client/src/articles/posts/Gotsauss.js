import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import gotsaussLaptop from '../../assets/images/gotsauss_laptop.webp';
import gotsaussMobile from '../../assets/images/gotsauss_mobile.webp';

function Gotsauss() {

    const tags = ['HTML', 'CSS', 'JavaScript'];

    const url = 'https://gotsauss.com/';

    // To get the optimum size for images containing a mobile preview, always add the word "mobile" in the alt
    const assets = [{
        src: gotsaussLaptop,
        alt: 'Gotsauss in Mac',
        video: null,
    }, {
        src: gotsaussMobile,
        alt: 'Gotsauss in mobile',
        video: null,
    }];

    return (
        <Section sectionClassName="article" title="Gotsauss">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        A professional coach trainer needed a dynamic, modern landing page to attract potential clients and showcase their coaching services. They wanted a solution that was fast, responsive, and easy to maintain, making Vue.js the perfect choice.
                    </p>
                    <p>
                        I designed and developed a sleek, interactive landing page using Vue.js. The page was tailored to highlight the coach’s expertise, services, and client testimonials, all while providing a seamless user experience. The use of Vue.js allowed for smooth transitions, responsive design, and quick load times, ensuring the page was both visually appealing and functional.
                    </p>
                    <Tags list="Tools Used" arr={tags} />
                    <p>Website: <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a></p>
                </div>
                <ArticleMedia assets={assets} />
            </article>
        </Section>
    );
}

export default Gotsauss;