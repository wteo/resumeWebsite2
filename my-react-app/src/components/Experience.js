import React, { useState } from 'react';
import './Experience.scss';

function Experience() {
    const [activeIndex, setActiveIndex] = useState(null);

    const experiences = [
        {
            title: "Web Developer | Jan 2020 to Present",
            content: "Details about experience 2"
        },
        {
            title: "Experience 2",
            content: "Details about experience 2"
        },
        {
            title: "Experience 3", 
            content: "Details about experience 3"
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="experience">
            <div className="experience__content">
                <h1 className="experience__content-title">My Experience</h1>
                <hr />
                <div className="experience__content-accordion">
                    {experiences.map((exp, index) => (
                        <div key={index} className="accordion-item">
                            <h2
                                className="accordion-title"
                                onClick={() => toggleAccordion(index)}
                            >
                                {exp.title}
                            </h2>
                            <p className={ `accordion-content ${activeIndex === index ? 'active' : '' }`}>
                                {exp.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
