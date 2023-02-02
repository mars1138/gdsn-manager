import React from 'react';

import Hero from '../shared/components/layout/Hero';
// import TabComponent from '../shared/components/TabComponent/TabComponent';
import Section from '../shared/components/layout/Section';
import Slider from '../shared/components/Slider/Slider';
import PlanCard from './PlanCard';
import { planCards } from '../assets/data/plansData';

import classes from './PlansPage.module.css';

import slide1 from '../assets/media/home/pexels-tiger-lily-4483942-min.jpg';
import slide2 from '../assets/media/home/pexels-monstera-6289028-min.jpg';
import slide3 from '../assets/media/home/pexels-burak-the-weekender-186461-min.jpg';

const sliderHome = [
  {
    title: 'Product Management',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: slide1,
  },
  {
    title: 'E-commerce Support',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: slide2,
  },
  {
    title: 'Powerful Analytics',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: slide3,
  },
];

const heroTitle = 'Pricing Plans For Your Needs';
const heroText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

const PlansPage = () => {
  const plansArray = [];

  planCards.forEach((plan, index) => {
    plansArray.push(<PlanCard plan={plan} id={index} key={index} />);
  });

  return (
    <React.Fragment>
      <Section>
        <Hero type="center" title={heroTitle} text={heroText} page="plans" />
      </Section>
      <Section>
        <div className={classes.planCards}>{plansArray}</div>
      </Section>
      <Section>
        <h2>Plans That Suit Any Company's Mission</h2>
        <Slider type="description" content={sliderHome} />
      </Section>
    </React.Fragment>
  );
};

export default PlansPage;
