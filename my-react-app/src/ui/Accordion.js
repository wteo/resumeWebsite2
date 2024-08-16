import React, { useState } from 'react';

import './Accordion.scss';

function Accordion({ experiences }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordions">
            {experiences.map((exp, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className="accordion-title"
                        onClick={() => toggleAccordion(index)}
                    >
                        <div>
                            <h3>{exp.title}</h3>
                            <h5>{exp.duration}</h5>
                        </div>
                        <span>+</span>
                    </div>
                    <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                        {exp.job.map((item, intemIndex) =>
                            <div className="job" key={intemIndex}>
                                <p className="job__description">{item.description}</p>
                                <ul className="job__list">
                                    {item.tasks.map((task, taskIndex) => <li key={taskIndex}>{task}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
