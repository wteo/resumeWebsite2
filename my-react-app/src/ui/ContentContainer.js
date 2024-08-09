import React from 'react';
import './ContentContainer.scss';

function ContentContainer({ children }) {
    return (
        <div className="content__wrapper">
            <div className="content__container">
                { children }
            </div>
        </div>
    );
}

export default ContentContainer;

