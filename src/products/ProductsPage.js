import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useHttpClient } from '../shared/components/hooks/http-hook';
import TabComponent from '../shared/components/TabComponent/TabComponent';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import Hero from '../shared/components/layout/Hero';
import classes from './ProductsPage.module.css';
// import { catalogActions } from '../store/catalog-slice';
import { fetchCatalog } from '../store/catalog-actions';

import img1 from '../assets/pexels-antonius-natan-11835350.jpg';
import img2 from '../assets/pexels-fauxels-3183197.jpg';
import img3 from '../assets/pexels-fauxels-3184418.jpg';
import img4 from '../assets/pexels-tiger-lily-4483942.jpg';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Products 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Products 2',
    content:
      'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img2,
  },
  {
    id: 3,
    tabTitle: 'Products 3',
    content:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img3,
  },
  {
    id: 4,
    tabTitle: 'Products 4',
    content:
      'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 4 Heading',
    imgUrl: img4,
  },
];

const ProductsPage = () => {
  const catalog = useSelector(state => state.catalog.products);
  const activeCount = catalog.filter(item => !item.dateInactive).length;
  const publishedCount = catalog.filter(item => item.datePublished).length;
  const unpublishedCount = catalog.filter(
    item => !item.dateInactive && !item.datePublished,
  ).length;
  const inactiveCount = catalog.filter(item => item.dateInactive).length;

  const authToken = useSelector(state => state.auth.token);
  const authUserId = useSelector(state => state.auth.userId);

  const { sendRequest } = useHttpClient();
  const dispatch = useDispatch();

  // console.log(isSubmitting, error, clearError);

  useEffect(() => {
    // const fetchData = async (user) => {
    //   try {
    //     console.log('exec replaceCatalog...');
    //     const catalog = await sendRequest(
    //       `http://localhost:5000/api/products/user/${user}`,
    //       'GET',
    //       null,
    //       {
    //         'Content-Type': 'application/json',
    //         Authorization: 'Bearer ' + authToken,
    //       }
    //     );

    //     // console.log('fetchedProducts: ', catalog);
    //     dispatch(
    //       catalogActions.replaceCatalog({ products: [...catalog.products] })
    //     );
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // console.log(authToken, authUserId);

    if (authToken && authUserId) {
      dispatch(fetchCatalog(authUserId, authToken));
    }
  }, [authUserId, authToken, dispatch, sendRequest]);

  return (
    <React.Fragment>
      <Section>
        <Hero type="center" />
      </Section>
      <Section>
        <div className={classes.cards}>
          <Card width="20">
            <Link to="/products/active">
              <h3>Active</h3>
              <span>{activeCount}</span>
            </Link>
          </Card>
          <Card width="20">
            <Link to="/products/published">
              <h3>Published</h3>
              <span>{publishedCount}</span>
            </Link>
          </Card>
          <Card width="20">
            <Link to="/products/unpublished">
              <h3>Unpublished</h3>
              <span>{unpublishedCount}</span>
            </Link>
          </Card>
          <Card width="20">
            <Link to="/products/inactive">
              <h3>Inactive</h3>
              <span>{inactiveCount}</span>
            </Link>
          </Card>
        </div>
      </Section>
      <Section>
        <TabComponent>{tabContent}</TabComponent>
      </Section>
    </React.Fragment>
  );
};

export default ProductsPage;
