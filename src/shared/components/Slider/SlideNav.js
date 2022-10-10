import React from 'react';

import classes from './Slider.module.css';

const SlideNav = props => {
  return (
    <div className={classes.left} onClick={prevSlide}>
      <ion-icon size="medium" src="/icons/chevron-back-outline.svg"></ion-icon>
    </div>
    //     <div className={classes.right} onClick={nextSlide}>
    //     <ion-icon
    //       size="medium"
    //       src="/icons/chevron-forward-outline.svg"
    //     ></ion-icon>
    //   </div>
  );
};

export default SlideNav;
