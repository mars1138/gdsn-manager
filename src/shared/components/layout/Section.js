import React from 'react';

import classes from './Section.module.css';

const Section = (props) => {
  const sectionClassNames = `${classes.section} ${props.sectionClass ? props.sectionClass : ''} `;
  const containerClassNames = `${classes.container} ${props.containerClass ? props.containerClass : ''}`;

  return (
    <section className={sectionClassNames}>
      <div className={containerClassNames}>{props.children}</div>
    </section>
  );
};

export default Section;
