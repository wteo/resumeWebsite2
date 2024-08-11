import React from 'react';
import './Skills.scss';

import placeholder from '../assets/placeholder.webp';

function Tools() {

    const categories = [
        {
            category: 'Front-End Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisl et orci tincidunt, ut posuere mi consequat. Integer ut metus vel leo hendrerit tincidunt vitae non odio.',
            tools: [
                'JavaScript', 'TypeScript', 'ES6', 'CSS', 'HTML',
            ],
            caseStudy: 'Case Study 1',
        },
        {
            category: 'Back-End Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisl et orci tincidunt, ut posuere mi consequat. Integer ut metus vel leo hendrerit tincidunt vitae non odio.',
            tools: [
                'NodeJS', 'Express', 'PHP', 'Firebase',
            ],
            caseStudy: 'Case Study 2',
        },
        {
            category: 'Development Tools & Infrastructure',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisl et orci tincidunt, ut posuere mi consequat. Integer ut metus vel leo hendrerit tincidunt vitae non odio.',
            tools: [
                'NPM', 'Yarn',
                'VS Code',
            ],
            caseStudy: 'Case Study 3',
        }
    ];

    return (
        <section className="skills">
            <h1>Skills</h1>
            <hr />
            <div className="skills__group">
                {
                    categories.map((category, categoryIndex) => (
                        <div className="skills__item" key={categoryIndex}>
                            <h4 className="skills__title">{category.category}</h4>
                            <p className="skills__description">{ category.description }</p>
                            <ul className="skills__list">Tools Used: 
                                {category.tools.map((tool, toolIndex) => <li key={toolIndex}>{tool}</li>)}
                            </ul>
                            <div className="skills__image-wrapper">
                                <img className="skills__image" src={ placeholder } alt="Case Study" />
                            </div>
                            <a className="skills__link" href="/">Learn More</a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Tools;