import React from 'react';

import ContentWrapper from './ContentWrapper';

import './Section.scss';

function Section({ sectionClassName, title, children }) {
  return (
    <section className={sectionClassName}>
      <ContentWrapper>
      <div className={`${sectionClassName}__content`}>
        <h1 className={`${sectionClassName}__title`}>{title}</h1>
        <hr className={`${sectionClassName}__divider`} />
        {children}
      </div>
      </ContentWrapper>
    </section>
  );
}

export default Section;
