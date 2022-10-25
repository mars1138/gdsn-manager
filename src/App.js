import React from 'react';
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
import ProductItem from './products/ProductItem';
import ProductsList from './products/ProductsList';
import AddProduct from './products/AddProduct';

import AboutPage from './about/AboutPage';

import ResourcesPage from './resources/ResourcesPage';
import Webinars from './resources/Webinars';
import Training from './resources/Training';
import Support from './resources/Support';

import ServicesPage from './services/ServicesPage';
import PlansPage from './plans/PlansPage';

function App() {
  let routes;

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
      <Route path="/products/inactive" exact>
        <ProductsList status="inactive" />
      </Route>
      <Route path="/products/add" exact>
        <AddProduct />
      </Route>
      <Route path="/products/:pid">
        <ProductItem />
      </Route>
      <Route path="/services">
        <ServicesPage />
      </Route>
      <Route path="/resources">
        <ResourcesPage />
      </Route>
      <Route path="/webinars">
        <Webinars />
      </Route>
      <Route path="/training">
        <Training />
      </Route>
      <Route path="/support">
        <Support />
      </Route>
      <Route path="/plans">
        <PlansPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/auth"></Route>
      <Redirect to="/auth" />
    </Switch>
  );

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
