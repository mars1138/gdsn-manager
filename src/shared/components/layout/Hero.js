import React from 'react';

import HeroText from './HeroText';

import classes from './Hero.module.css';

const Hero = (props) => {
  return (
    <div className={classes.hero}>
      <HeroText type={props.type} />
    </div>
  );
};

export default Hero;
