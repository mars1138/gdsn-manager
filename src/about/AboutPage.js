import React from 'react';

import Hero from '../shared/components/layout/Hero';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import Slider from '../shared/components/Slider/Slider';
import classes from './AboutPage.module.css';
import Contact from '../shared/components/contact/Contact';

import img1 from '../assets/media/about/pexels-alphatradezone-5833273-min.jpg';
import img2 from '../assets/media/about/pexels-fauxels-3184418-min.jpg';
import img3 from '../assets/media/about/pexels-christina-morillo-1181354-min.jpg';
// import img4 from '../assets/pexels-tiger-lily-4483942.jpg';

import slide1 from '../assets/media/about/pexels-fauxels-3182759B-min.jpg';
import slide2 from '../assets/media/about/pexels-andrea-piacquadio-3769021B-min.jpg';
import slide3 from '../assets/media/about/pexels-fauxels-3184292B-min.jpg';

const cardContent = [
  {
    id: 1,
    cardTitle: 'HISTORY',
    cardText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
  },
  {
    id: 2,
    cardTitle: 'COMMUNITY',
    cardText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    id: 3,
    cardTitle: 'LEGACY',
    cardText:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod.',
  },
];

const tabContent = [
  {
    id: 1,
    tabTitle: 'News',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Latest Trends',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Partners',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Collaboration with Industry Leaders',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Careers',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'We Are Looking for Quality Talent',
    imgUrl: img3,
  },
];

const sliderGallery = [
  {
    imgUrl: slide1,
  },
  {
    imgUrl: slide2,
  },
  {
    imgUrl: slide3,
  },
];

const heroTitle = 'Our Company';
const heroText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

const AboutPage = () => {
  const cardArray = [];

  cardContent.forEach((card) =>
    cardArray.push(
      <Card key={card.id} width="30">
        <h3>{card.cardTitle}</h3>
        <p>{card.cardText}</p>
      </Card>
    )
  );

  return (
    <React.Fragment>
      <Section>
        <Hero page="about" title={heroTitle} text={heroText} />
      </Section>
      <Section>
        <div className={classes.cards}>{cardArray}</div>
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
      <Section>
        <Contact />
      </Section>
      <Section trigger="0.1">
        {/* <Slider type="description" content={sliderHome} /> */}
        <Slider type="gallery" content={sliderGallery} />
      </Section>
    </React.Fragment>
  );
};

export default AboutPage;
