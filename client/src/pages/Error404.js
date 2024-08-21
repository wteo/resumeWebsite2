import React from 'react';

import './Error404.scss';

function error404() {
    return (
        <div className="error">
            <h1>Error 404</h1>
            <p>It seems you've stumbled upon a page that doesn't exist on my website.</p> 
            <p>No worries—I’ll help you get back on track.</p>
            <a href="/">
                <button className="error__button">Take me home</button>
            </a>

        </div>
    );
}

export default error404;