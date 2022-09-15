import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../UIElements/Button';
import classes from './NavLinks.module.css';

const NavLinks = props => {
  return (
    <React.Fragment>
      <div className={classes['nav-container']}>
        <ul className={classes['nav-links']}>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
          </li>
          <li>
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
          </li>
          {/* <li>
          </li> */}
        </ul>
            <Button to="/auth">Login</Button>
            {/* <Button to="/auth" inverse>
              Logout
            </Button> */}
      </div>
    </React.Fragment>
  );
};

export default NavLinks;
