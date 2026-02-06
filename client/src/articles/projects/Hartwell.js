import React from 'react';

import Section from '../../ui/Section';
import Diagram from '../../components/SketchpadArchitecture';

import '../templates/Article.scss';


function Hartwell() {

    return (
        <Section sectionClassName="article" title="Automating the entire CPQ and invoicing process for Hartwell Mechanical Services">
            <Diagram />
        </Section>
    );
}

export default Hartwell;