import React from 'react';

import classes from './Slider.module.css';

const SlideDot = props => {
  return (
    <button
      className={`${classes.dot} ${
        props.currentSlide === props.index ? classes.active : ''
      }`}
      onClick={() => {
        props.goToSlide(props.index);
      }}
      id={props.index}
      key={props.index}
    ></button>
  );
};

export default SlideDot;
