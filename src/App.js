import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import MainHeader from './shared/Navigation/MainHeader';
import TabComponent from './shared/components/TabComponent/Tabs';
import ScrollToTop from './shared/utilities/ScrollToTop';

function App() {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact></Route>
      <Route path="/about"></Route>
      <Route path="/resources"></Route>
      <Route path="/auth"></Route>
      <Redirect to="/auth" />
    </Switch>
  );

  return (
    <Router>
      <MainHeader />
      <TabComponent />
      <main>
        <ScrollToTop>{routes}</ScrollToTop>
      </main>
    </Router>
  );
}

export default App;
