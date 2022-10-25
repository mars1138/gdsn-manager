import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '../shared/UIElements/Button';
import Section from '../shared/components/layout/Section';

import { catalog } from '../assets/data/test-catalog';

import classes from './ProductItem.module.css';

const ProductItem = () => {
  const params = useParams();

  console.log(params.pid, typeof params.pid);

  const product = catalog.filter((item) => item.gtin === params.pid)[0];

  console.log('product: ', product);

  return (
    // <Card>
    <Section>
      <div key={params.pid} className={classes.product}>
        {/* <div className={classes.image}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.description}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div> */}
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
    // </Card>
  );
};

export default ProductItem;
