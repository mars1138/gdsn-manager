import React from 'react';

import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import classes from './ActiveProducts.module.css';

import { catalog } from '../assets/data/test-catalog';
import { productsTabs } from '../assets/data/productsData';

const ActiveProducts = () => {
  return (
    <React.Fragment>
      <Section>
        <h1>Active Products</h1>
        <div className={classes.cards}>
          <Card>
            <h2>CARD CONTENT</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
          <Card>
            <h2>CARD CONTENT</h2>
            <div className={classes.image}></div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
          <Card>
            <h2>CARD CONTENT</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora provident explicabo inventore pariatur, nobis cumque a
              culpa quod, alias voluptate veniam quae qui ut at, nostrum est
              porro enim.
            </p>
          </Card>
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
      </Section>
      <Section>
        <TabComponent>{productsTabs}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default ActiveProducts;
