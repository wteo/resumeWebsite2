import React from 'react';
import './ContentWrapper.scss';

function ContentWrapper({ children }) {
    return (
        <div className="content__wrapper">
            <div className="content__container">
                { children }
            </div>
        </div>
    );
}

export default ContentWrapper;

