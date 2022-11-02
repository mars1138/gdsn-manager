import React, { useState } from 'react';

import Slide from './Slide';
import SlideDot from './SlideDot';
import SlideNav from './SlideNav';
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
      <Slide
        key={index}
        index={index}
        slide={slide}
        type={props.type}
        shift={translate}
      />,
    );

    dotElements.push(
      <SlideDot
        key={index}
        index={index}
        goToSlide={goToSlide}
        currentSlide={currentSlide}
      />,
    );
  });

  const slideType = `slider--${props.type}`;
  const sliderClasses = `${classes[slideType]} ${classes.slider}`;

  return (
    <div className={sliderClasses}>
      <div className={classes.container}>
        <div className={classes.slides}>{slideElements}</div>
        <div className={classes.dots}>{dotElements}</div>
        <SlideNav type="left" slideAction={prevSlide} />
        <SlideNav type="right" slideAction={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
