import React from 'react';

import Hero from '../shared/components/layout/Hero';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import classes from './Support.module.css';

import img1 from '../assets/media/resources/support/pexels-mikhail-nilov-7682103-min.jpg';
import img2 from '../assets/media/resources/support/firos-nv-1wBmbnvv4TE-unsplash-min.jpg';
import img3 from '../assets/media/resources/support/pexels-mart-production-7709175-min.jpg';

import card1 from '../assets/media/resources/support/pexels-mikhail-nilov-7681562-min.jpg';
import card2 from '../assets/media/resources/support/pexels-mart-production-7709208-min.jpg';
import card3 from '../assets/media/resources/support/pexels-yan-krukau-8867244-min.jpg';

const cardContent = [
  {
    id: 1,
    cardTitle: 'webinars',
    cardText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    cardImg: card1,
  },
  {
    id: 2,
    cardTitle: 'training',
    cardText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    cardImg: card2,
  },
  {
    id: 3,
    cardTitle: 'support',
    cardText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    cardImg: card3,
  },
];

const tabContent = [
  {
    id: 1,
    tabTitle: 'Help Desk',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: "We're Here To Help!",
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Research',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Expanding Our Horizons',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Community',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Engage With Other Users',
    imgUrl: img3,
  },
];

const heroTitle = 'Support';
const heroText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

const Support = () => {
  const cardArray = [];

  cardContent.forEach((card) =>
    cardArray.push(
      <Card key={card.id}>
        {/* <h3>{card.cardTitle}</h3>
        <p>{card.cardText}</p> */}
        <div className={classes.image}>
          <img src={card.cardImg} alt={card.cardTitle} />
        </div>
      </Card>
    )
  );

  return (
    <React.Fragment>
      <Section>
        <Hero type="center" page="support" title={heroTitle} text={heroText} />
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
      <Section>
        <div className={classes.supportCards}>{cardArray}</div>
      </Section>
    </React.Fragment>
  );
};

export default Support;
