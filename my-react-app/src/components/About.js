import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';

import './About.scss';

import profile from '../assets/profile.webp';

function About() {
    return (
        <section className="about">
            <ContentWrapper>
                <h1 className="about__title">Wendy Teo</h1>
                <hr className="about__divider" />
                <hr className="about__divider" />
                <div className="about__content">
                    <div className="about__description">
                        <h1>About Me</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula neque in arcu interdum,
                            sit amet malesuada nunc facilisis. Aenean sit amet leo id odio efficitur dapibus.
                            Vivamus convallis ex a felis fermentum, ac laoreet lacus volutpat. Suspendisse potenti.
                            Maecenas sed tortor odio. Cras ac lectus risus. Pellentesque at sagittis neque, in suscipit urna.
                        </p>
                        <p>
                            Ut bibendum arcu sed libero volutpat, at congue mi tincidunt. Nulla facilisi.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Praesent venenatis magna ut eros pharetra, sit amet dictum dolor varius.
                            Proin sit amet mi et elit dictum sollicitudin vel ac justo. Integer suscipit enim vel gravida dictum.
                        </p>
                        <a href="/">Learn More</a>
                    </div>
                    <div className="about__image-wrapper">
                        <img src={ profile } alt="Profile" className="about__image" />
                    </div>
                </div>
            </ContentWrapper>
        </section>
    );
}

export default About;