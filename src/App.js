import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import MainNavigation from './shared/Navigation/MainNavigation';

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
      <MainNavigation />
      Hello
      <main>{routes}</main>
    </Router>
  );
}

export default App;
