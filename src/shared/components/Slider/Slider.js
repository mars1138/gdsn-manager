import React, { useState } from 'react';

import img1 from '../../../assets/pexels-tiger-lily-4483942.jpg';
import img2 from '../../../assets/pexels-fauxels-3183197.jpg';
import img3 from '../../../assets/pexels-fauxels-3184418.jpg';
import classes from './Slider.module.css';

const Slider = (props) => {
  const [translate, setTranslate] = useState([0, 100, 200]);
  const size = 3;

  //   const highlightDot = (slide) => {
  //     //
  //   };

  const goToSlide = (slide) => {
    const tempTrans = [];

    for (let i = 0; i < size; i++) {
      tempTrans.push(100 * (i - slide));
    }

    console.log('tempTrans: ', tempTrans);

    setTranslate([...tempTrans]);
  };

  return (
    <React.Fragment>
      <div className={classes.slider}>
        <div
          className={classes.slide}
          style={{ transform: `translateX(${translate[0]}%)` }}
          id="0"
        >
          <div className={classes['slide-content']}>
            <h5>Content Header 1</h5>
            <div className={classes.content}>
              {props.type === 'testimonial' && (
                <blockquote className={classes.blockquote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates blanditiis fugiat nesciunt est error, dolor quis
                  dicta vitae illum, quibusdam laboriosam sed dolorem, quasi
                  perferendis eligendi distinctio quaerat inventore temporibus.
                </blockquote>
              )}
              {props.type === 'description' && (
                <React.Fragment>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus at error accusantium mollitia. Voluptas qui,
                    aperiam magnam quae exercitationem modi eveniet quia vel
                    quisquam voluptatem quidem nostrum amet dolores quis?
                  </p>
                  <div className={classes.image}>
                    <img src={img1} alt="temp" />
                  </div>
                </React.Fragment>
              )}
              {props.type === 'gallery' && (
                <div className={classes.gallery}>
                  <img src={img1} alt="temp" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={classes.slide}
          style={{ transform: `translateX(${translate[1]}%)` }}
          id="1"
        >
          <div className={classes['slide-content']}>
            <h5>Content Header 1</h5>
            <div>
              {props.type === 'testimonial' && (
                <blockquote className={classes.blockquote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates blanditiis fugiat nesciunt est error, dolor quis
                  dicta vitae illum, quibusdam laboriosam sed dolorem, quasi
                  perferendis eligendi distinctio quaerat inventore temporibus.
                </blockquote>
              )}
              {props.type === 'description' && (
                <React.Fragment>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus at error accusantium mollitia. Voluptas qui,
                    aperiam magnam quae exercitationem modi eveniet quia vel
                    quisquam voluptatem quidem nostrum amet dolores quis?
                  </p>
                  <div className={classes.image}>
                    <img src={img2} alt="temp" />
                  </div>
                </React.Fragment>
              )}
              {props.type === 'gallery' && (
                <div className={classes.gallery}>
                  <img src={img2} alt="temp" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={classes.slide}
          style={{ transform: `translateX(${translate[2]}%)` }}
          id="2"
        >
          <div className={classes['slide-content']}>
            <h5>Content Header 1</h5>
            <div>
              {props.type === 'testimonial' && (
                <blockquote className={classes.blockquote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates blanditiis fugiat nesciunt est error, dolor quis
                  dicta vitae illum, quibusdam laboriosam sed dolorem, quasi
                  perferendis eligendi distinctio quaerat inventore temporibus.
                </blockquote>
              )}
              {props.type === 'description' && (
                <React.Fragment>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus at error accusantium mollitia. Voluptas qui,
                    aperiam magnam quae exercitationem modi eveniet quia vel
                    quisquam voluptatem quidem nostrum amet dolores quis?
                  </p>
                  <div className={classes.image}>
                    <img src={img1} alt="temp" />
                  </div>
                </React.Fragment>
              )}
              {props.type === 'gallery' && (
                <div className={classes.gallery}>
                  <img src={img3} alt="temp" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dots}>
        <button
          className={classes.dot}
          onClick={() => {
            goToSlide(0);
          }}
          id={0}
        >
          0
        </button>
        <button
          className={classes.dot}
          onClick={() => {
            goToSlide(1);
          }}
          id={1}
        >
          1
        </button>
        <button
          className={classes.dot}
          onClick={() => {
            goToSlide(2);
          }}
          id={2}
        >
          2
        </button>
      </div>
    </React.Fragment>
  );
};

export default Slider;
