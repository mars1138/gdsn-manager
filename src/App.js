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
import ActiveProducts from './products/ActiveProducts';
import PublishedItems from './products/PublishedItems';
import AddProduct from './products/AddProduct';
import DeletedProducts from './products/DeletedProducts';

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
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/active-products">
        <ActiveProducts />
      </Route>
      <Route path="/published-items">
        <PublishedItems />
      </Route>
      <Route path="/add-product">
        <AddProduct />
      </Route>
      <Route path="/deleted-products">
        <DeletedProducts />
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
