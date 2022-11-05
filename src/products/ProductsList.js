import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductsTable from './ProductsTable';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Section from '../shared/components/layout/Section';
import Card from '../shared/UIElements/Card';

// import { catalog } from '../assets/data/test-catalog';
// import { catalogActions } from '../../src/store/catalog-slice';
import classes from './ProductsList.module.css';

import {
  productsTabs,
  activeColumns,
  inactiveColumns,
} from '../assets/data/productsData';

const ProducstList = (props) => {
  const catalog = useSelector((state) => state.catalog.products);
  const productsList = [];

  const dispatch = useDispatch();

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

    if (filter === 'unpublished') {
      return (
        !product.dateInactive &&
        product.subscribers.length === 0 &&
        !product.datePublished
      );
    }
  };

  console.log('ProductsList catalog: ', catalog);
  console.log('state catalog: ', catalog);

  if (catalog) {
    catalog.forEach((item) => {
      if (filterProducts(item, props.status)) productsList.push(item);
    });

    productsList.sort((itemA, itemB) => itemA.gtin - itemB.gtin);
  }

  useEffect(() => {
    console.log('exec replaceCatalog...');
    // dispatch(catalogActions.replaceCatalog(catalog));
    // dispatchEvent(fetchCartData());
  }, [dispatch]);

  const noProducts = (
    <div className={classes['no-products']}>
      <Card width="30">
        <p>No Products To List</p>
      </Card>
    </div>
  );

  return (
    <React.Fragment>
      <Section>
        <h1 className={classes.header}>
          {`${props.status}`} Products {`(${productsList.length})`}
        </h1>
        {productsList.length > 0 && (
          <ProductsTable
            columns={
              props.status === 'inactive' ? inactiveColumns : activeColumns
            }
            data={productsList}
            status={props.status}
          />
        )}
        {productsList.length < 1 && noProducts}
      </Section>
      <Section>
        <TabComponent>{productsTabs}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default ProducstList;
