import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import MainNav from './shared/Navigation/MainNav';

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
      <MainNav />
      Hello
      <main>{routes}</main>
    </Router>
  );
}

export default App;
