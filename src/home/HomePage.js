import React from 'react';

import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import Slider from '../shared/components/Slider/Slider';

import classes from './HomePage.module.css';

import img1 from '../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';
import img4 from '../assets/pexels-tiger-lily-4483942.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Tab1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Tab2',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Tab3',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Tab4',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: 'Tab 4 Heading',
    imgUrl: img4,
  },
];

const HomePage = () => {
  return (
    <React.Fragment>
      <Section>
        <h1>Home</h1>
        <div className={classes.cards}>
          <Card>
            <h2>CARD CONTENT</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
          <Card>
            <h2>CARD CONTENT</h2>
            <div className={classes.image}></div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
          <Card>
            <h2>CARD CONTENT</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
          <Card>
            <h2>CARD CONTENT</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
        </div>
      </Section>
      <Section>
        <Slider type="description" />
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default HomePage;
