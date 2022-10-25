import React from 'react';

import ProductsTable from './ProductsTable';
import TabComponent from '../shared/components/TabComponent/TabComponent';
// import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';

import classes from './ProductsList.module.css';

import { catalog } from '../assets/data/test-catalog';
import {
  productsTabs,
  activeColumns,
  inactiveColumns,
} from '../assets/data/productsData';

const ProducstList = (props) => {
  const productsList = [];

  const filterProducts = (product, filter) => {
    if (filter === 'inactive') {
      return product.dateInactive;
    }
    if (filter === 'active') {
      return !product.dateInactive;
    }
    if (filter === 'published') {
      return !product.dateInactive && product.datePublished;
    }
  };

  catalog.forEach((item) => {
    if (filterProducts(item, props.status)) productsList.push(item);
  });

  console.log('catalogSize: ', catalog.length);
  console.log('filteredSize: ', productsList.length);

  return (
    <React.Fragment>
      <Section>
        <h1 className={classes.header}>{`${props.status}`} Products</h1>
        <ProductsTable
          columns={
            props.status === 'inactive' ? inactiveColumns : activeColumns
          }
          data={productsList}
          status={props.status}
        />
      </Section>
      <Section>
        <TabComponent>{productsTabs}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default ProducstList;
