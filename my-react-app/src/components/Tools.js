import React from 'react';
import './Tools.scss';

function Tools() {
    return (
        <footer className="tools">
            <h1>Tools</h1>
            <hr />
            <div className="tools__content">
                <ul className="tools__content-category">Category 1
                    <li className="tools__content-item">Item 1</li>
                    <li className="tools__content-item">Item 2</li>
                    <li className="tools__content-item">Item 3</li>
                    <li className="tools__content-item">Item 4</li>
                </ul>
                <ul className="tools__content-category">Category 2
                    <li className="tools__content-item">Item 1</li>
                    <li className="tools__content-item">Item 2</li>
                    <li className="tools__content-item">Item 3</li>
                    <li className="tools__content-item">Item 4</li>
                </ul>
                <ul className="tools__content-category">Category 3
                    <li className="tools__content-item">Item 1</li>
                    <li className="tools__content-item">Item 2</li>
                    <li className="tools__content-item">Item 3</li>
                    <li className="tools__content-item">Item 4</li>
                </ul>
            </div>
        </footer>
    );
}

export default Tools;