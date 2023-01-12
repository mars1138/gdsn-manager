import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '../shared/UIElements/Button';
import Section from '../shared/components/layout/Section';

import { catalog } from '../assets/data/test-catalog';

import classes from './ProductItem.module.css';

const ProductItem = () => {
  const params = useParams();

  return (
    <Section>
      <div key={params.pid} className={classes.product}>
        <div className={classes.gtin}>
          <h2>GTIN: {params.pid}</h2>
        </div>
        <div>
          <p></p>
        </div>
        <div className={classes.button}>
          <Button>Edit</Button>
          <Button go>Publish</Button>
          <Button danger>Delete</Button>
        </div>
      </div>
    </Section>
  );
};

export default ProductItem;
