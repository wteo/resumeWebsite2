import React from 'react';
import './About.scss';
import placeholder from '../assets/placeholder.webp';

function About() {
    return (
        <section className="about">
            <h1 className="about__title">About Me</h1>
            <div className="about__content">
                <div className="about__description">
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
                    <button>Learn More</button>
                </div>
                <div className="about__image-wrapper">
                    <img src={ placeholder } alt="Profile" className="about__image" />
                </div>
            </div>
        </section>
    );
}

export default About;