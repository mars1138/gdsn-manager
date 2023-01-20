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
import video from '../assets/File - 9772.mp4';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Content Library',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'News',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Events',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
];

const heroTitle = 'Resources';
const heroText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

const ResourcesPage = () => {
  return (
    <React.Fragment>
      <Section>
        <Hero type="right" title={heroTitle} text={heroText} page="resources" />
      </Section>
      <Section>
        <div className={classes.cards}>
          <Card>
            <Link to="/resources/webinars">
              <h3>WEBINARS</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                tempora provident explicabo inventore pariatur, nobis cumque a
                culpa quod, alias voluptate veniam quae qui ut at, nostrum est
                porro enim.
              </p>
            </Link>
          </Card>
          <Card>
            <Link to="/resources/training">
              <h3>TRAINING</h3>
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
            <Link to="/resources/support">
              <h3>SUPPORT</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                tempora provident explicabo inventore pariatur, nobis cumque a
                culpa quod, alias voluptate veniam quae qui ut at, nostrum est
                porro enim.
              </p>
            </Link>
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
