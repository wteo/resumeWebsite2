import React from 'react';

import Section from '../../ui/Section';
import Diagram from '../../components/SketchpadArchitecture';

import '../templates/Article.scss';


function Hartwell() {

    return (
        <Section sectionClassName="article" title="Automated Quote-to-CRM Pipeline for Harwell Mechanical Services">
            <Diagram />
        </Section>
    );
} 

export default Hartwell;