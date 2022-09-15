import React from 'react';

import TabComponent from '../components/TabComponent/TabComponent';

import img1 from '../../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../../assets/pexels-fauxels-3183197.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Tab1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Tab2',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
];

const ResourcesPage = () => {
  return (
    <section>
      <h1>Resources</h1>
      <TabComponent>{tabContent}</TabComponent>
    </section>
  );
};

export default ResourcesPage;
