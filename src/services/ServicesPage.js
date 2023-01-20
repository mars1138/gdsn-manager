import React from 'react';

import Hero from '../shared/components/layout/Hero';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Section from '../shared/components/layout/Section';
import Slider from '../shared/components/Slider/Slider';

import img1 from '../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Item Management',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Automation',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 3,
    tabTitle: 'Education',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 4,
    tabTitle: 'Reporting',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
];

const sliderGallery = [
  {
    imgUrl: '/media/pexels-tiger-lily-4483942.jpg',
  },
  {
    imgUrl: '/media/pexels-fauxels-3183197.jpg',
  },
  {
    imgUrl: '/media/pexels-fauxels-3184418.jpg',
  },
];

const sliderTestimonial = [
  {
    author: 'Author Name 1',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: '/media/pexels-tiger-lily-4483942.jpg',
  },
  {
    author: 'Author Name 2',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: '/media/pexels-fauxels-3183197.jpg',
  },
  {
    author: 'Author Name 3',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: '/media/pexels-fauxels-3184418.jpg',
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
