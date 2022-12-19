import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductsTable from './ProductsTable';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Section from '../shared/components/layout/Section';
import Card from '../shared/UIElements/Card';

// import { catalog } from '../assets/data/test-catalog';
// import { authActions } from '../../src/store/auth-slice';
// import { fetchCatalogData } from '../../src/store/catalog-actions';
import classes from './ProductsList.module.css';

import {
  productsTabs,
  activeColumns,
  inactiveColumns,
} from '../assets/data/productsData';
// import { catalogActions } from '../store/catalog-slice';
import { useHttpClient } from '../shared/components/hooks/http-hook';

const ProducstList = (props) => {
  // let catalog;
  const authToken = useSelector((state) => state.auth.token);
  const catalog = useSelector((state) => state.catalog.products);
  const productsList = [];

  const dispatch = useDispatch();

  const { sendRequest } = useHttpClient();

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

  // console.log('ProductsList catalog: ', catalog);
  // console.log('state catalog: ', catalog);

  if (catalog) {
    catalog.forEach((item) => {
      if (filterProducts(item, props.status)) productsList.push(item);
    });

    productsList.sort((itemA, itemB) => itemA.gtin - itemB.gtin);
  }

  const userId = useSelector((state) => state.auth.userId);
  // console.log('userId: ', userId);

  useEffect(() => {
    console.log('exec replaceCatalog...');
    const fetchData = async (user) => {
      try {
        const catalog = await sendRequest(
          `http://localhost:5000/api/products/user/${user}`,
          'GET',
          null,
          {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + authToken,
          }
        );

        console.log('fetchedCatalog: ', catalog);
        // dispatch(catalogActions.replaceCatalog(catalog));
      } catch (err) {}
    };

    if (userId) {
      fetchData(userId);
      // dispatch(fetchCatalogData(userId));
    }
  }, [dispatch, userId, sendRequest, authToken]);

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
