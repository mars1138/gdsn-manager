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
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products/new">My Products</NavLink>
          </li>
          <li>
            <NavLink to="/products/new">Solutions</NavLink>
          </li>
          <li>
            <NavLink to="/products/new">Resources</NavLink>
          </li>
          <li>
            <NavLink to="/products/new">Price Plans</NavLink>
          </li>
          <li>
            <NavLink to="/products/new">About Us</NavLink>
          </li>
        </ul>
        <Button to="/auth">Login</Button>
        <Button to="/auth" inverse>
          Logout
        </Button>
      </div>
    </React.Fragment>
  );
};

export default NavLinks;
