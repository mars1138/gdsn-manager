import React from 'react';

// import Card from '../shared/UIElements/Card';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { index, image, name, gtin, description } = props;

  return (
    // <Card>
    <div className={classes.product}>
      <div className={classes.number}>{index + 1}</div>
      <div className={classes.image}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.description}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className={classes.gtin}>
        <p>GTIN: {gtin}</p>
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
    // </Card>
  );
};

export default ProductItem;
