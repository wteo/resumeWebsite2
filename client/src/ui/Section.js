import React from 'react';

import ContentWrapper from './ContentWrapper';

import './Section.scss';

function Section({ sectionClassName, title, children, headingLevel = 'h2' }) {
  const Heading = headingLevel;
  return (
    <section className={sectionClassName}>
      <ContentWrapper>
      <div className={`${sectionClassName}__content`}>
        <Heading className={`${sectionClassName}__title`}>{title}</Heading>
        <hr className={`${sectionClassName}__divider`} />
        {children}
      </div>
      </ContentWrapper>
    </section>
  );
}

export default Section;
