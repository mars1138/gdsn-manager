import React from 'react';

import Hero from '../shared/components/layout/Hero';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Section from '../shared/components/layout/Section';
import Slider from '../shared/components/Slider/Slider';

import img1 from '../assets/media/services/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/media/services/digitization-g9292200ae_640.jpg';
import img3 from '../assets/media/services/audit-g7ab6ca2f4_640.jpg';
import img4 from '../assets/media/services/online-education-gae6d1ed66_640.jpg';

import slide1 from '../assets/media/services/online-g8b04bfbcb_640.png';
import slide2 from '../assets/media/services/pexels-tiger-lily-4483941.jpg';
import slide3 from '../assets/media/services/pexels-alexander-suhorucov-6457521.jpg';

import cust1 from '../assets/media/plans/2.jpg';
import cust2 from '../assets/media/plans/51.jpg';
import cust3 from '../assets/media/plans/59.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Item Management',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Product Management Made Easy',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Automation',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Simplifying Routine Tasks',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Reporting',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Standard and Custom Reporting Available',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Education',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: "We're Here to Help",
    imgUrl: img4,
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

const sliderTestimonial = [
  {
    author: 'Author Name 1',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: cust1,
  },
  {
    author: 'Author Name 2',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: cust2,
  },
  {
    author: 'Author Name 3',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: cust3,
  },
];

const heroTitle = 'Services';
const heroText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur adipisicing elit.';

const ServicesPage = () => {
  return (
    <React.Fragment>
      <Section>
        <Hero page="services" title={heroTitle} text={heroText} />
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
      <Section trigger="0.1">
        <Slider type="gallery" content={sliderGallery} />
        <Slider type="testimonial" content={sliderTestimonial} />
      </Section>
    </React.Fragment>
  );
};

export default ServicesPage;
