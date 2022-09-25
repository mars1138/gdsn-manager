import React from 'react';
// import { NavLink } from 'react-router-dom';

import Button from '../UIElements/Button';
import NavMenuItems from './NavMenuItems';
import { navMenuData } from './navMenuData';
import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  const menuLinks = navMenuData.map((menu, index) => {
    const depthLevel = 0;
    return <NavMenuItems items={menu} key={index} depthLevel={depthLevel} />;
  });

  return (
    <React.Fragment>
      <nav className={classes['nav-container']}>
        <ul className={classes['nav-links']}>
          {menuLinks}

          {/* <li className={classes['nav-link']}>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
            
          </li>
          <li className={classes['nav-link']}>
            <NavLink activeClassName={classes.active} to="/products/">
              My Products
            </NavLink>
            
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/solutions">
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/resources">
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/plans">
              Price Plans
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              About Us
            </NavLink>
          </li> */}
        </ul>
        <Button to="/auth">Login</Button>
        {/* <Button to="/auth" inverse>
              Logout
            </Button> */}
      </nav>
    </React.Fragment>
  );
};

export default NavLinks;
