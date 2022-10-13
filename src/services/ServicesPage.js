import React from 'react';

import TabComponent from '../shared/components/TabComponent/TabComponent';
import Section from '../shared/components/layout/Section';
import Slider from '../shared/components/Slider/Slider';


import img1 from '../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';
import img4 from '../assets/pexels-tiger-lily-4483942.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Solutions 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Solutions 2',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Solutions 3',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Solutions4',
    content:
      'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 4 Heading',
    imgUrl: img4,
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

const ServicesPage = () => {
  return (
    <React.Fragment>
      <Section>
        <h1>Services</h1>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
      <Section trigger="0.1">
        <Slider type="gallery" content={sliderGallery} />
        <Slider type="testimonial" content={sliderTestimonial} />
      </Section>
      {/* <Section>
        <div className={classes.cards}>
          <div className={classes.first}>
            <Card>
              <h2>CARD CONTENT</h2>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                tempora provident explicabo inventore pariatur, nobis cumque a
                culpa quod, alias voluptate veniam quae qui ut at, nostrum est
                porro enim.
              </p>
            </Card>
            </div>
            <div className={classes.second}>
            <Card>
              <h2>CARD CONTENT</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                tempora provident explicabo inventore pariatur, nobis cumque a
                culpa quod, alias voluptate veniam quae qui ut at, nostrum est
                porro enim.
              </p>
            </Card>
            </div>
            <div className={classes.third}>
            <Card>
            <h2>CARD CONTENT</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                tempora provident explicabo inventore pariatur, nobis cumque a
                culpa quod, alias voluptate veniam quae qui ut at, nostrum est
                porro enim.
                </p>
                </Card>
                </div>
                <div className={classes.fourth}>
            <Card>
            <h2>CARD CONTENT</h2>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                tempora provident explicabo inventore pariatur, nobis cumque a
                culpa quod, alias voluptate veniam quae qui ut at, nostrum est
                porro enim.
                </p>
                </Card>
          </div>
        </div>
      </Section> */}
    </React.Fragment>
  );
};

export default ServicesPage;
