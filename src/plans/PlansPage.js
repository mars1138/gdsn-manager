import React from 'react';

import Hero from '../shared/components/layout/Hero';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Section from '../shared/components/layout/Section';
// import Slider from '../shared/components/Slider/Slider';
import PlanCard from './PlanCard';
import { planCards } from '../assets/data/plansData';

import classes from './PlansPage.module.css';

import img1 from '../assets/pexels-tiger-lily-4483942.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';

// import cust1 from '../assets/media/plans/2.jpg';
// import cust2 from '../assets/media/plans/51.jpg';
// import cust3 from '../assets/media/plans/59.jpg';

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

// const sliderTestimonial = [
//   {
//     author: 'Author Name 1',
//     quote:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
//     imgUrl: cust1,
//   },
//   {
//     author: 'Author Name 2',
//     quote:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
//     imgUrl: cust2,
//   },
//   {
//     author: 'Author Name 3',
//     quote:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
//     imgUrl: cust3,
//   },
// ];

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
        <div className={classes.cards}>{plansArray}</div>
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
      {/* <Section>
        <Slider type="testimonial" content={sliderTestimonial} />
      </Section> */}
    </React.Fragment>
  );
};

export default PlansPage;
