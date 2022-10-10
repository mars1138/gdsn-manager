import React, { useState } from 'react';

import Slide from './Slide';
import SlideDot from './SlideDot';
import classes from './Slider.module.css';

const Slider = props => {
  const [translate, setTranslate] = useState([0, 100, 200]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = props.content.length - 1;
  const sliderContent = props.content;
  let slideElements = [];
  let dotElements = [];

  const goToSlide = slide => {
    const tempTrans = [];

    for (let i = 0; i <= maxSlide; i++) {
      tempTrans.push(100 * (i - slide));
    }

    setCurrentSlide(slide);
    setTranslate([...tempTrans]);
  };

  const nextSlide = () => {
    let current = currentSlide === maxSlide ? 0 : currentSlide + 1;
    setCurrentSlide(current);
    goToSlide(current);
  };
  const prevSlide = () => {
    let current = currentSlide === 0 ? maxSlide : currentSlide - 1;
    setCurrentSlide(current);
    goToSlide(current);
  };

  sliderContent.forEach((slide, index) => {
    slideElements.push(
      <Slide index={index} slide={slide} type={props.type} shift={translate} />,
    );

    dotElements.push(
      <SlideDot
        index={index}
        goToSlide={goToSlide}
        currentSlide={currentSlide}
      />,
    );
  });

  const slideType = `slider--${props.type}`;
  const sliderClasses = `${classes[slideType]} ${classes.slider}`;
  console.log(sliderClasses);

  return (
    <div className={sliderClasses}>
      <div className={classes.container}>
        <div className={classes.slides}>{slideElements}</div>
        <div className={classes.dots}>{dotElements}</div>
        {/* <div className={classes.left} onClick={prevSlide}>
          <ion-icon
            size="medium"
            src="/icons/chevron-back-outline.svg"
          ></ion-icon>
        </div>
        <div className={classes.right} onClick={nextSlide}>
          <ion-icon
            size="medium"
            src="/icons/chevron-forward-outline.svg"
          ></ion-icon>
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
