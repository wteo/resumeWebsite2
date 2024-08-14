import React from 'react';

import ContentWrapper from '../ui/ContentWrapper';
import Form from './Form';

import './FullProfile.scss';

function FullProfiles() {
    return (
        <section className="profile">
            <ContentWrapper>
                <div className="profile__content">
                    <h1 className="profile__title">
                        About Me
                    </h1>
                    <hr />
                    <div className="profile__group">
                        <div className="profile__image-wrapper">
                            <div className="form__wrapper">
                                <Form />
                            </div>
                        </div>
                        <div className="profile__description">
                            <p>Loren Ipsum</p>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </section>
    );
}

export default FullProfiles;