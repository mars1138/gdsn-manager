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

import ServicesPage from './services/ServicesPage';
import PlansPage from './plans/PlansPage';
import Auth from './user/Auth';

import { catalogActions } from './store/catalog-slice';
import { authActions } from './store/auth-slice';

let logoutTimer;

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const expireDate = useSelector(state => state.auth.expireDate);
  let routes;

  useEffect(() => {
    dispatch(catalogActions.getCatalogStorage());
  }, [dispatch]);

  // useEffect(() => {
  //   if (token && expireDate) {
  //     const remainingTime = expireDate - new Date().getTime();
  //     logoutTimer = setTimeout(dispatch(authActions.logout), remainingTime);
  //   } else {
  //     clearTimeout(logoutTimer);
  //   }
  // });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expireDate) > new Date()
    )
      dispatch(
        authActions.login(
          storedData.userId,
          storedData.token,
          storedData.expireDate,
        ),
      );
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
