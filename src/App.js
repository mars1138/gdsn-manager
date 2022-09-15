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

import HomePage from './shared/pages/HomePage';
import ProductsPage from './products/pages/ProductsPage';
import AboutPage from './shared/pages/AboutPage';
import ResourcesPage from './shared/pages/ResourcesPage';
import SolutionsPage from './shared/pages/SolutionsPage';
import PlansPage from './shared/pages/PlansPage';

function App() {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/solutions">
        <SolutionsPage />
      </Route>
      <Route path="/resources">
        <ResourcesPage />
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
    </Router>
  );
}

export default App;
