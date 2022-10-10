import React, { useState } from 'react';

// import img1 from '../../../assets/pexels-tiger-lily-4483942.jpg';
// import img2 from '../../../assets/pexels-fauxels-3183197.jpg';
// import img3 from '../../../assets/pexels-fauxels-3184418.jpg';
import classes from './Slider.module.css';

const Slider = (props) => {
  const [translate, setTranslate] = useState([0, 100, 200]);
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [activeDot, setActiveDot] = useState(0);
  const maxSlide = props.content.length - 1;
  const sliderContent = props.content;
  let slideElements = [];
  let dotElements = [];

  //   const highlightDot = (slide) => {
  //     //
  //   };

  const goToSlide = (slide) => {
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
    if (props.type === 'description') {
      slideElements.push(
        <div
          className={classes.slide}
          style={{ transform: `translateX(${translate[index]}%)` }}
          id={index}
          key={index}
        >
          <div className={classes.content}>
            <div className={classes.description}>
              <h3>{slide.title}</h3>
              <p className={classes.text}>{slide.text}</p>
            </div>
            <div className={classes.image}>
              <img src={slide.imgUrl} alt={slide.title} />
            </div>
          </div>
        </div>
      );
    }

    if (props.type === 'gallery') {
      slideElements.push(
        <div
          className={classes.slide}
          style={{ transform: `translateX(${translate[index]}%)` }}
          id={index}
          key={index}
        >
          <div className={classes.content}>
            <div className={classes.gallery}>
              <img src={slide.imgUrl} alt="temp" />
            </div>
          </div>
        </div>
      );
    }

    if (props.type === 'testimonial') {
      slideElements.push(
        <div
          className={classes.slide}
          style={{ transform: `translateX(${translate[index]}%)` }}
          id={index}
          key={index}
        >
          <div className={classes.content}>
            <div className={classes.quote}>
              <blockquote>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt odit voluptate unde quasi atque quas amet minima eius
                tempore ea dignissimos rerum repudiandae omnis cupiditate,
                laudantium illo suscipit, dicta illum"
              </blockquote>
              <div className={classes.author}>
                <span>-&nbsp;{slide.author}</span>
              </div>
            </div>
            <div className={classes['author-image']}>
              <img src={slide.imgUrl} alt={slide.title} />
            </div>
          </div>
        </div>
      );
    }

    dotElements.push(
      <button
        className={`${classes.dot} ${
          currentSlide === index ? classes.active : ''
        }`}
        onClick={() => {
          goToSlide(index);
        }}
        id={index}
        key={index}
      ></button>
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
        <div className={classes.left} onClick={prevSlide}>
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
        </div>
      </div>
    </div>
  );
};

export default Slider;
