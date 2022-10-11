import React from 'react';

import TabComponent from '../shared/components/TabComponent/TabComponent';
import TrainingCard from './TrainingCard';
import Section from '../shared/components/layout/Section';
import classes from './Training.module.css';

import img1 from '../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';
import img4 from '../assets/pexels-tiger-lily-4483942.jpg';

const trainingContent = [
  {
    title: 'Training 1',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    imgUrl: 'media/pexels-fauxels-3183197.jpg',
  },
  {
    title: 'Training 2',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    imgUrl: 'media/pexels-fauxels-3183197.jpg',
  },
  {
    title: 'Training 3',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    imgUrl: 'media/pexels-fauxels-3183197.jpg',
  },
  {
    title: 'Training 4',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    imgUrl: 'media/pexels-fauxels-3183197.jpg',
  },
];

const tabContent = [
  {
    id: 1,
    tabTitle: 'Products 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Products 2',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Products 3',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Products 4',
    content:
      'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 4 Heading',
    imgUrl: img4,
  },
];

const Training = () => {
  const cards = [];

  trainingContent.forEach((topic, index) => {
    cards.push(<TrainingCard training={topic} index={index} key={index} />);
  });

  return (
    <React.Fragment>
      <Section>
        <h1>Training</h1>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
      <Section trigger=".1">
        <div className={classes.cards}>{cards}</div>
      </Section>
    </React.Fragment>
  );
};

export default Training;
