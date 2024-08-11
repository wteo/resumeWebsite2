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
        {
            title: "Experience 4",
            content: "Details about experience 4"
        },
        {
            title: "Experience 5", 
            content: "Details about experience 5"
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="experience">
            <div className="experience__content">
                <h1 className="experience__content-title">My Experience</h1>
                <div className="experience__content-accordion">
                    {experiences.map((exp, index) => (
                        <div key={index} className="accordion-item">
                            <div
                                className="accordion-title"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3>{exp.title}</h3>
                                <span>+</span>
                            </div>
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
