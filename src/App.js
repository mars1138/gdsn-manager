import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';
import MainHeader from './shared/Navigation/MainHeader';
import ScrollToTop from './shared/utilities/ScrollToTop';
import Footer from './shared/components/footer/Footer';

import HomePage from './home/HomePage';

import ProductsPage from './products/ProductsPage';
import UpdateProduct from './products/UpdateProduct';
import ProductsList from './products/ProductsList';
import AddProduct from './products/AddProduct';
import AboutPage from './about/AboutPage';
import ResourcesPage from './resources/ResourcesPage';
import Webinars from './resources/Webinars';
import Training from './resources/Training';
import Support from './resources/Support';
import { useHttpClient } from './shared/components/hooks/http-hook';
// import { catalogActions } from './store/catalog-slice';
import { fetchCatalog } from './store/catalog-actions';

import ServicesPage from './services/ServicesPage';
import PlansPage from './plans/PlansPage';
import Auth from './user/Auth';

import { authActions } from './store/auth-slice';
// import { catalogActions } from './store/catalog-slice';

let logoutTimer;

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const authUserId = useSelector(state => state.auth.userId);
  const authToken = useSelector(state => state.auth.token);
  const authExpire = useSelector(state => state.auth.expireDate);

  const dispatch = useDispatch();

  const { sendRequest } = useHttpClient();
  let routes;

  // console.log(
  //   'authState: ',
  //   useSelector(state => state.auth),
  // );

  useEffect(() => {
    // console.log('authToken: ', authToken);
    // console.log('authExpire: ', authExpire);
    if (authToken !== null && authExpire !== null) {
      const remainingTime = authExpire - new Date().getTime();
      // console.log(remainingTime);
      logoutTimer = setTimeout(() => {
        dispatch(authActions.logout());
      }, remainingTime);

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
        fetchCatalog(authUserId);
      }
    } else {
      clearTimeout(logoutTimer);
    }
  }, [authUserId, authExpire, authToken, sendRequest, dispatch]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));

    // console.log('storedData: ', storedData);
    if (
      storedData &&
      storedData.token &&
      storedData.expireDate &&
      new Date(storedData.expireDate) > new Date(1671223612525)
    ) {
      dispatch(
        authActions.login({
          user: storedData.userId,
          token: storedData.token,
          expireDate: storedData.expireDate,
        }),
      );
    } else {
      localStorage.removeItem('userData');
    }
  }, [dispatch]);

  if (isAuth) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/active" exact>
          <ProductsList status="active" />
        </Route>
        <Route path="/products/published" exact>
          <ProductsList status="published" />
        </Route>
        <Route path="/products/unpublished" exact>
          <ProductsList status="unpublished" />
        </Route>
        <Route path="/products/inactive" exact>
          <ProductsList status="inactive" />
        </Route>
        <Route path="/products/add" exact>
          <AddProduct />
        </Route>
        <Route path="/products/:pid">
          <UpdateProduct />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/resources" exact>
          <ResourcesPage />
        </Route>
        <Route path="/resources/webinars">
          <Webinars />
        </Route>
        <Route path="/resources/training">
          <Training />
        </Route>
        <Route path="/resources/support">
          <Support />
        </Route>
        <Route path="/plans">
          <PlansPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        {/* <Route path="/auth">
          <Auth />
        </Route> */}
        <Redirect to="/products" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/resources" exact>
          <ResourcesPage />
        </Route>
        <Route path="/resources/webinars">
          <Webinars />
        </Route>
        <Route path="/resources/training">
          <Training />
        </Route>
        <Route path="/resources/support">
          <Support />
        </Route>
        <Route path="/plans">
          <PlansPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <Router>
      <MainHeader />
      <main>
        <ScrollToTop>{routes}</ScrollToTop>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
