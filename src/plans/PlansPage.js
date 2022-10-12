import React from 'react';

import TabComponent from '../shared/components/TabComponent/TabComponent';
import Section from '../shared/components/layout/Section';
import Slider from '../shared/components/Slider/Slider';
import PlanCard from './PlanCard';
import { planCards } from '../assets/data/plansData';

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

const PlansPage = () => {
  const plansArray = [];

  planCards.forEach((plan, index) => {
    plansArray.push(<PlanCard plan={plan} id={index} key={index} />);
  });

  return (
    <React.Fragment>
      <Section>
        <h1>Price Plans</h1>
        <div className={classes.cards}>{plansArray}</div>
        {/* <div className={classes.cards}>
          <div className={classes.plan}>
            <Card>
              <div className={classes['plan-info']}>
                <div>
                  <h2>Basic</h2>
                  <div className={classes['plan-image']}>
                    <img src={img1} alt="" />
                  </div>
                  <ul className={classes['plan-list']}>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/bookmark-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/bookmark-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform. Access to Peer
                        Community Platforma
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/bookmark-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                  </ul>
                </div>
                <Button to="/about/#contact-form">Get Quote</Button>
              </div>
            </Card>
          </div>
          <div className={classes.plan}>
            <Card>
              <div className={classes['plan-info']}>
                <div>
                  <h2>Pro</h2>
                  <div className={classes['plan-image']}>
                    <img src={img2} alt="" />
                  </div>
                  <ul className={classes['plan-list']}>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/bookmark-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/bookmark-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community PlatformAccess to Peer
                        Community Platforma
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/bookmark-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/checkmark-circle-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community PlatformAccess to Peer
                        Community Platforma
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/checkmark-circle-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                  </ul>
                </div>
                <Button to="/about/#contact-form">Get Quote</Button>
              </div>
            </Card>
          </div>
          <div className={classes.plan}>
            <Card>
              <div className={classes['plan-info']}>
                <div>
                  <h2>Enterprise</h2>
                  <div className={classes['plan-image']}>
                    <img src={img3} alt="" />
                  </div>
                  <ul className={classes['plan-list']}>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/bookmark-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/bookmark-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community PlatformAccess to Peer
                        Community Platforma
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/bookmark-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/checkmark-circle-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community PlatformAccess to Peer
                        Community Platforma
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/checkmark-circle-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/diamond-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                    <li>
                      <div className={classes['plan-icon']}>
                        <ion-icon
                          size="medium"
                          src="/icons/diamond-outline.svg"
                        ></ion-icon>
                      </div>
                      <div className={classes['plan-detail']}>
                        Access to Peer Community Platform
                      </div>
                    </li>
                  </ul>
                </div>
                <Button to="/about/#contact-form">Get Quote</Button>
              </div>
            </Card>
          </div>
        </div> */}
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
      <Section>
        <Slider type="testimonial" content={sliderTestimonial} />
      </Section>
    </React.Fragment>
  );
};

export default PlansPage;
