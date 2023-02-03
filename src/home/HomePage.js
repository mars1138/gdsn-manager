import React from 'react';

import Hero from '../shared/components/layout/Hero';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import Slider from '../shared/components/Slider/Slider';
import classes from './HomePage.module.css';

import img1 from '../assets/media/home/carlos-muza-hpjSkU2UYSU-unsplash-min.jpg';
import img2 from '../assets/media/home/claudio-schwarz-fyeOxvYvIyY-unsplash-min.jpg';
import img3 from '../assets/media/home/old-youth-lDDyRE1Ec8Q-unsplash-min.jpg';
import img4 from '../assets/media/home/pexels-andrea-piacquadio-3778235-min.jpg';

import cust1 from '../assets/media/home/78.jpg';
import cust2 from '../assets/media/home/7.jpg';
import cust3 from '../assets/media/home/65.jpg';

import slide1 from '../assets/media/home/pexels-tiger-lily-4483942-min.jpg';
import slide2 from '../assets/media/home/pexels-monstera-6289028-min.jpg';
import slide3 from '../assets/media/home/pexels-burak-the-weekender-186461-min.jpg';

import video from '../assets/File - 9772.mp4';

const cardContent = [
  {
    id: 1,
    cardTitle: 'DIGITAL CATALOG',
    cardText:
      'GDSN-Plus is a demo of a Global Data Synchronization Network application.  It allows users to create a catalog of products that is used as a single source of information.  The products can then be easily shared with customers.',
  },
  {
    id: 2,
    cardTitle: 'INDUSTRY STANDARD',
    cardText:
      'It is the mission of GDSN-Plus to provide a system where suppliers and their customers can share product information using a standardized set of attributes.',
  },
  {
    id: 3,
    cardTitle: 'GLOBAL COMMERCE',
    cardText:
      'Having a single standard for all products allows for all customers to have the information they need to properly and efficiently process these products. At any point in the distribution chain, all parties will have the data they need for proper transport, storage, and handling of sale items.',
  },
  // {
  //   id: 4,
  //   cardTitle: 'RELIABILITY',
  //   cardText:
  //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora provident explicabo inventore pariatur, nobis cumque a culpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
  // },
];

const tabContent = [
  {
    id: 1,
    tabTitle: 'Solutions',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: '',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Resources',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: '',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Marketing',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: '',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Customers',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: '',
    imgUrl: img4,
  },
];

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

const sliderTestimonial = [
  {
    author: 'Maxwell Hughes, Entercom Manufacturing',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: cust1,
  },
  {
    author: 'Jacob Smythe, FoodCorp, Inc.',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: cust2,
  },
  {
    author: 'Liz Xavier, Samwell Distributing',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: cust3,
  },
];

const heroTitle = 'Home';
const heroText =
  'Welcome to GDSN-Plus! To begin creating your product catalog, please sign in or create an account. At the My Products page, you can then begin creating new items.';

const HomePage = () => {
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
        <Hero type="right" page="home" title={heroTitle} text={heroText} />
      </Section>
      <Section>
        <h2>Your Comprehensive Item Management Solution</h2>
        <div className={classes.cards}>{cardArray}</div>
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
      <Section trigger="0.1">
        <h2>Services That Fit Your Company's Needs</h2>
        <Slider type="description" content={sliderHome} />
        {/* <Slider type="gallery" content={sliderGallery} /> */}
      </Section>
      <Section>
        <h2>Valued By Industry Leaders</h2>
        <Slider type="testimonial" content={sliderTestimonial} />
      </Section>
      <Section>
        <video width="600" height="360" src={video} type="/video/mp4" controls>
          Your browser does not support the video tag.
        </video>
      </Section>
    </React.Fragment>
  );
};

export default HomePage;
