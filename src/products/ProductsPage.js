import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useHttpClient } from '../shared/components/hooks/http-hook';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Button from '../shared/UIElements/Button';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import Hero from '../shared/components/layout/Hero';
import classes from './ProductsPage.module.css';
// import { catalogActions } from '../store/catalog-slice';
import { fetchCatalog } from '../store/catalog-functions';

import img1 from '../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';
import img4 from '../assets/pexels-tiger-lily-4483942.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Active',
    content:
      'These are all the products in your catalog are actively available for publication to your customers.  Active products can be edited, published, or deactivated',
    contentHeading: 'Active Products',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Published',
    content:
      'These products in your catalog are one which currently have at least one customer that is subscribing to data from that product.  Published products can be edited, published to additional customers, or deactivated',
    contentHeading: 'Published Products',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Unpublished',
    content:
      'Unpublished products in your catalog are all active products for which no customers are currently subscribed.  Unpublished products can be edited, published to customers, or deactivated',
    contentHeading: 'Unpublished Products',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Inactive',
    content:
      'Inactive products are those that are no longer available to customers, but are kept in the catalog for historical purposes.  Inactive (or deactivated) products can be reactivated or permanently deleted from the catalog',
    contentHeading: 'Inactive Products',
    imgUrl: img4,
  },
];

const ProductsPage = () => {
  const catalog = useSelector((state) => state.catalog.products);
  const activeCount = catalog.filter((item) => !item.dateInactive).length;
  const publishedCount = catalog.filter((item) => item.datePublished).length;
  const unpublishedCount = catalog.filter(
    (item) => !item.dateInactive && !item.datePublished
  ).length;
  const inactiveCount = catalog.filter((item) => item.dateInactive).length;

  const authToken = useSelector((state) => state.auth.token);
  const authUserId = useSelector((state) => state.auth.userId);

  const { sendRequest } = useHttpClient();
  const dispatch = useDispatch();

  // console.log(isSubmitting, error, clearError);

  useEffect(() => {
    if (authToken && authUserId) {
      dispatch(fetchCatalog(authUserId, authToken));
    }
  }, [authUserId, authToken, dispatch, sendRequest]);

  const heroTitle = 'Your Product Catalog';
  const heroText =
    'Please click on a category of products below to see a listing of product category';

  return (
    <React.Fragment>
      <Section>
        <Hero type="center" title={heroTitle} text={heroText} page="products" />
      </Section>
      <Section>
        <h2>Total Products: {catalog.length}</h2>
        <div className={classes.productCards}>
          <Link to="/products/active">
            <Card>
              <h3>Active</h3>
              <span>{activeCount}</span>
            </Card>
          </Link>
          <Link to="/products/published">
            <Card>
              <h3>Published</h3>
              <span>{publishedCount}</span>
            </Card>
          </Link>
          <Link to="/products/unpublished">
            <Card>
              <h3>Unpublished</h3>
              <span>{unpublishedCount}</span>
            </Card>
          </Link>
          <Link to="/products/inactive">
            <Card>
              <h3>Inactive</h3>
              <span>{inactiveCount}</span>
            </Card>
          </Link>
        </div>
      </Section>
      <Section>
        <div className={classes.text}>
          <p>
            Please see the tabbed component below for a description of each
            category of products on your catalog. Click on Add New Item to
            create a new catalog product.
          </p>
          <div className={classes.addItem}>
            <Button to="/products/add">Add New Item</Button>
          </div>
        </div>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default ProductsPage;
