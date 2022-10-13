import React from 'react';

import Hero from '../shared/components/layout/Hero';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import Slider from '../shared/components/Slider/Slider';
import classes from './HomePage.module.css';

import img1 from '../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';
import img4 from '../assets/pexels-tiger-lily-4483942.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Tab1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Tab2',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Tab3',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Tab4',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequitempora provident explicabo inventore pariatur, nobis cumque aculpa quod, alias voluptate veniam quae qui ut at, nostrum est porro enim.',
    contentHeading: 'Tab 4 Heading',
    imgUrl: img4,
  },
];

const sliderHome = [
  {
    title: 'Content Header 1',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: '/media/pexels-tiger-lily-4483942.jpg',
  },
  {
    title: 'Content Header 2',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: '/media/pexels-fauxels-3183197.jpg',
  },
  {
    title: 'Content Header 3',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus at error accusantium mollitia.  Voluptas qui, aperiam magnam quae exercitationem modi eveniet quia vel quisquam voluptatem quidem nostrum amet dolores quis?',
    imgUrl: '/media/pexels-fauxels-3184418.jpg',
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

const HomePage = () => {
  return (
    <React.Fragment>
      <Section>
        <Hero type="right" />
      </Section>
      <Section>
        {/* <h2>Home</h2> */}
        <div className={classes.cards}>
          <Card>
            <h3>CARD CONTENT</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
          <Card>
            <h3>CARD CONTENT</h3>
            <div className={classes.image}></div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
          <Card>
            <h3>CARD CONTENT</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
          <Card>
            <h3>CARD CONTENT</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
        </div>
      </Section>
      <Section trigger="0.1">
        <h2>Slider Gallery</h2>
        <Slider type="description" content={sliderHome} />
        <Slider type="gallery" content={sliderGallery} />
        <Slider type="testimonial" content={sliderTestimonial} />
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default HomePage;
