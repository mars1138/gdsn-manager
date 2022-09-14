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
import TabComponent from './shared/components/TabComponent/TabComponent';
import ScrollToTop from './shared/utilities/ScrollToTop';
import img1 from './assets/shutterstock-152854481.webp';

const tabContent = [
  {
    id: 1,
    tabTitle: 'Tab1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 1 Heading',
    imgUrl: img1,
  },
  {
    id: 2,
    tabTitle: 'Tab2',
    content: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 2 Heading',
    imgUrl: img1,
  },
  {
    id: 3,
    tabTitle: 'Tab3',
    content: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 3 Heading',
    imgUrl: img1,
  },
  {
    id: 4,
    tabTitle: 'Tab4',
    content: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contentHeading: 'Tab 4 Heading',
    imgUrl: img1,
  },
];

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
      <TabComponent>{tabContent}</TabComponent>
      <main>
        <ScrollToTop>{routes}</ScrollToTop>
      </main>
    </Router>
  );
}

export default App;
