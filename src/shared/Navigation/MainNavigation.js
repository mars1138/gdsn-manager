import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Logo from './Logo';
import './MainNavigation.css';

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      {/* <SideDrawer>
            <nav>
                <NavLinks/>
            </nav>
        </SideDrawer> */}

      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <Logo/>
        <h1 className="main-navigation__title">
          <Link to="/">GDSN-Plus</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
