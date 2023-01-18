import React from 'react';

import classes from './HeroText.module.css';

const HeroText = props => {
  const heroClasses = `${classes.content} 
    ${props.type === 'left' ? classes.left : ''}
    ${props.type === 'center' ? classes.center : ''}
    ${props.type === 'right' ? classes.right : ''}
    `;

  return (
    <div className={heroClasses}>
      <h1 className={classes.title}>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default HeroText;
