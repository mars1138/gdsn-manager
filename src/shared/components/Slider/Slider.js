import React from 'react';

import img1 from '../../../assets/pexels-tiger-lily-4483942.jpg';
import img2 from '../../../assets/pexels-fauxels-3183197.jpg';
import img3 from '../../../assets/pexels-fauxels-3184418.jpg';
import classes from './Slider.module.css';

const Slider = (props) => {
  return (
    <div className={classes.slider}>
      <div className={classes.slide} id="1">
        <div className={classes['slide-content']}>
          <h5>Content Header 1</h5>
          <div>
            {
              (props.type = 'testimonial' && (
                <blockquote className={classes.blockquote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates blanditiis fugiat nesciunt est error, dolor quis
                  dicta vitae illum, quibusdam laboriosam sed dolorem, quasi
                  perferendis eligendi distinctio quaerat inventore temporibus.
                </blockquote>
              ))
            }
            {
              (props.type = 'description' && (
                <React.Fragment>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus at error accusantium mollitia. Voluptas qui,
                    aperiam magnam quae exercitationem modi eveniet quia vel
                    quisquam voluptatem quidem nostrum amet dolores quis?
                  </p>
                  <div className={classes.image}>
                    <img src={img1} />
                  </div>
                </React.Fragment>
              ))
            }
            {
              (props.type = 'gallery' && (
                <div className={classes.gallery}>
                  <img src={img1} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className={classes.slide} id="2">
        <div className={classes['slide-content']}>
          <h5>Content Header 1</h5>
          <div>
            {
              (props.type = 'testimonial' && (
                <blockquote className={classes.blockquote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates blanditiis fugiat nesciunt est error, dolor quis
                  dicta vitae illum, quibusdam laboriosam sed dolorem, quasi
                  perferendis eligendi distinctio quaerat inventore temporibus.
                </blockquote>
              ))
            }
            {
              (props.type = 'description' && (
                <React.Fragment>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus at error accusantium mollitia. Voluptas qui,
                    aperiam magnam quae exercitationem modi eveniet quia vel
                    quisquam voluptatem quidem nostrum amet dolores quis?
                  </p>
                  <div className={classes.image}>
                    <img src={img1} />
                  </div>
                </React.Fragment>
              ))
            }
            {
              (props.type = 'gallery' && (
                <div className={classes.gallery}>
                  <img src={img1} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className={classes.slide} id="3">
        <div className={classes['slide-content']}>
          <h5>Content Header 1</h5>
          <div>
            {
              (props.type = 'testimonial' && (
                <blockquote className={classes.blockquote}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates blanditiis fugiat nesciunt est error, dolor quis
                  dicta vitae illum, quibusdam laboriosam sed dolorem, quasi
                  perferendis eligendi distinctio quaerat inventore temporibus.
                </blockquote>
              ))
            }
            {
              (props.type = 'description' && (
                <React.Fragment>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus at error accusantium mollitia. Voluptas qui,
                    aperiam magnam quae exercitationem modi eveniet quia vel
                    quisquam voluptatem quidem nostrum amet dolores quis?
                  </p>
                  <div className={classes.image}>
                    <img src={img1} />
                  </div>
                </React.Fragment>
              ))
            }
            {
              (props.type = 'gallery' && (
                <div className={classes.gallery}>
                  <img src={img1} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className={classes.dots}>
        <button className={classes.dot} id={1}></button>
        <button className={classes.dot} id={2}></button>
        <button className={classes.dot} id={3}></button>
      </div>
    </div>
  );
};

export default Slider;
