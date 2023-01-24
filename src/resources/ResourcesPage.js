import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../shared/components/layout/Hero';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import classes from './ResourcesPage.module.css';

import img1 from '../assets/media/resources/niklas-ohlrogge-uu0cOMPdM2g-unsplash.jpg';
import img2 from '../assets/media/resources/monitor-gbe11283c1_640.jpg';
import img3 from '../assets/media/resources/chuttersnap-Q_KdjKxntH8-unsplash.jpg';

import video from '../assets/File - 9772.mp4';

const cardContent = [
  {
    id: 1,
    cardTitle: 'webinars',
    cardText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
  },
  {
    id: 2,
    cardTitle: 'training',
    cardText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
  },
  {
    id: 3,
    cardTitle: 'support',
    cardText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
  },
];

const tabContent = [
  {
    id: 1,
    tabTitle: 'Content Library',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Extensive Resources Available',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'News',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Stay Current On Recent News',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Events',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Annual Events',
    imgUrl: img3,
  },
];

const heroTitle = 'Resources';
const heroText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

const ResourcesPage = () => {
  const cardArray = [];

  cardContent.forEach((card) =>
    cardArray.push(
      <Link to={`/resources/${card.cardTitle}`}>
        <Card key={card.id}>
          <h3>{card.cardTitle}</h3>
          <p>{card.cardText}</p>
        </Card>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Section>
        <Hero type="right" title={heroTitle} text={heroText} page="resources" />
      </Section>
      <Section>
        <div className={classes.cards}>{cardArray}</div>
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
