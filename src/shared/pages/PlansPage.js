import React from 'react';

import TabComponent from '../components/TabComponent/TabComponent';

import img1 from '../../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../../assets/pexels-fauxels-3183197.jpg';
import img3 from '../../assets/pexels-fauxels-3184418.jpg';

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
    <section>
      <h1>My Plans</h1>
      <TabComponent>{tabContent}</TabComponent>
    </section>
  );
};

export default PlansPage;
