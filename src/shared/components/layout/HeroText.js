import React from 'react';

import classes from './HeroText.module.css';

const HeroText = (props) => {
  const heroClasses = `${classes.content} 
    ${props.type === 'left' ? classes.left : ''}
    ${props.type === 'center' ? classes.center : ''}
    ${props.type === 'right' ? classes.right : ''}
    `;

  return (
    <div className={heroClasses}>
      <h1 className={classes.title}>HERO TITLE</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor
        sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default HeroText;
