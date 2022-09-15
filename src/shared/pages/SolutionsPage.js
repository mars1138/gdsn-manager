import React from 'react';

import TabComponent from '../components/TabComponent/TabComponent';

import img1 from '../../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../../assets/pexels-fauxels-3183197.jpg';
import img3 from '../../assets/pexels-fauxels-3184418.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Solutions 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Solutions 2',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Solutions 3',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
];

const SolutionsPage = () => {
  return (
    <section>
      <h1>My Solutions</h1>
      <TabComponent>{tabContent}</TabComponent>
    </section>
  );
};

export default SolutionsPage;
