import React from 'react';

import Section from '../../ui/Section';
import Tags from '../../components/Tag';
import ArticleMedia from '../templates/ArticleMedia';

import '../templates/Article.scss';

import gotsaussLaptop from '../../assets/images/gotsauss_laptop.webp';
import gotsaussMobile from '../../assets/images/gotsauss_mobile.webp';

function Gotsauss() {

    const tags = ['Fidgma', 'JavaScript', 'VueJS', 'MailJet', 'Netlify'];

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
        <Section sectionClassName="article" title="Landing Page for Personal Trainer Anthony Attapattu">
            <article className="article__group">
                <div className="article__description">
                    <p>
                        Anthony Attapattu, a professional training coach, needed a landing page to attract clients and showcase his services with 
                        minimal ongoing maintenance. Since a Content Management System (CMS) wasn't necessary, I chose VueJS for its quick setup and 
                        fast response time.
                    </p>
                    <p>
                        After an initial call to understand his needs, I created a wireframe aligned with his brand. 
                        Following a few design revisions, I developed the landing page, which highlights his profile, services, client testimonials, 
                        and includes a contact form, with weekly updates via Zoom or email.
                    </p>
                    <p>
                        With no CMS required, I integrated MailJet for form maintenance and hosted the site on Netlify.
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