import React from 'react';

import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import Button from '../shared/UIElements/Button';

import classes from './PlansPage.module.css';

import img1 from '../assets/pexels-tiger-lily-4483942.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';

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

const PlansPage = () => {
  return (
    <React.Fragment>
      <Section>
        <h1>Price Plans</h1>
        <div className={classes.cards}>
          <div className={classes.plan}>
            <Card>
              <div className={classes.info}>
                <div>
                  <h2>Basic</h2>
                  <div className={classes['card-image']}>
                    <img src={img1} alt="" />
                  </div>
                  <ul>
                    <li>asdf</li>
                    <li>asdfasdfa</li>
                    <li>fdsafasd</li>
                    <li>fasdfa</li>
                    <li>afas</li>
                  </ul>
                </div>
                <Button to="/about/#contact-form">Get Quote</Button>
              </div>
            </Card>
          </div>
          <div className={classes.plan}>
            <Card>
              <div className={classes.info}>
                <div>
                  <h2>Pro</h2>
                  <div className={classes['card-image']}>
                    <img src={img2} alt="" />
                  </div>
                  <ul>
                    <li>asdf</li>
                    <li>asdfasdfa</li>
                    <li>fdsafasd</li>
                    <li>fasdfa</li>
                    <li>afas</li>
                  </ul>
                </div>
                <Button to="/about/#contact-form">Get Quote</Button>
              </div>
            </Card>
          </div>
          <div className={classes.plan}>
            <Card>
              <div className={classes.info}>
                <div>
                  <h2>Enterprise</h2>
                  <div className={classes['card-image']}>
                    <img src={img3} alt="" />
                  </div>
                  <ul>
                    <li>asdf</li>
                    <li>asdfasdfa</li>
                    <li>fdsafasd</li>
                    <li>fasdfa</li>
                    <li>afas</li>
                  </ul>
                </div>
                <Button to="/about/#contact-form">Get Quote</Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default PlansPage;
