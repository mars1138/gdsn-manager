import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../shared/components/layout/Hero';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import classes from './ResourcesPage.module.css';

import img1 from '../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';
import img4 from '../assets/pexels-tiger-lily-4483942.jpg';
import video from '../assets/File - 9772.mp4';

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

const ResourcesPage = () => {
  return (
    <React.Fragment>
      <Section>
        <Hero type="right" />
      </Section>
      <Section>
        {/* <h2>Resources</h2> */}
        <div className={classes.cards}>
          <Card>
            <Link to="/resources/webinars">
              <h3>Webinars</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                tempora provident explicabo inventore pariatur, nobis cumque a
                culpa quod, alias voluptate veniam quae qui ut at, nostrum est
                porro enim.
              </p>
            </Link>
          </Card>
          <Card>
            <Link to='/resources/training'>
              <h3>Training</h3>
              <div className={classes.image}></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                tempora provident explicabo inventore pariatur, nobis cumque a
                culpa quod, alias voluptate veniam quae qui ut at, nostrum est
                porro enim.
              </p>
            </Link>
          </Card>
          <Card>
            <h3>Support</h3>
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
        <video width="600" height="360" src={video} type="/video/mp4" controls>
          Your browser does not support the video tag.
        </video>
      </Section>
    </React.Fragment>
  );
};

export default ResourcesPage;
