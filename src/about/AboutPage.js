import React from 'react';

import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import classes from './AboutPage.module.css';
import Contact from '../shared/components/contact/Contact';
// import SetRevealSections from '../shared/utilities/SetRevealSections';

import img1 from '../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';
import img4 from '../assets/pexels-tiger-lily-4483942.jpg';

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
  {
    id: 3,
    tabTitle: 'Tab3',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Tab4',
    content:
      'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 4 Heading',
    imgUrl: img4,
  },
];

const AboutPage = () => {
  // useEffect(() => {
  //   SetRevealSections();
  // }, []);

  return (
    <React.Fragment>
      <Section>
        <h1>About</h1>
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
        <TabComponent>{tabContent}</TabComponent>
      </Section>
      <Section>
        <Contact />
      </Section>
    </React.Fragment>
  );
};

export default AboutPage;
