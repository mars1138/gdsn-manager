import React from 'react';

import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';

import classes from './PlansPage.module.css';

import img1 from '../assets/pexels-tiger-lily-4483942.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Basic',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Pro',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Expert',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
];

const PlansPage = () => {
  return (
    <React.Fragment>
      <Section>
        <h1>Price Plans</h1>
        <div className={classes.cards}>
          <Card>
            <h2>Basic</h2>
            <div className={classes['card-image']}>
              <img src={img1} alt="" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, blanditiis aspernatur nobis voluptas quam cum amet
              temporibus reiciendis veritatis possimus quae explicabo doloremque
              fuga quis harum, ipsa voluptatum, facilis neque.
            </p>
          </Card>
          <Card>
            <h2>Pro</h2>
            <div className={classes['card-image']}>
              <img src={img2} alt="" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, blanditiis aspernatur nobis voluptas quam cum amet
              temporibus reiciendis veritatis possimus quae explicabo doloremque
              fuga quis harum, ipsa voluptatum, facilis neque.
            </p>
          </Card>
          <Card>
            <h2>Enterprise</h2>
            <div className={classes['card-image']}>
              <img src={img3} alt="" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, blanditiis aspernatur nobis voluptas quam cum amet
              temporibus reiciendis veritatis possimus quae explicabo doloremque
              fuga quis harum, ipsa voluptatum, facilis neque.
            </p>
          </Card>
        </div>
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default PlansPage;
