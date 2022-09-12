import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  return (
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
      <li>
        <button>
          <NavLink to="/auth">Login</NavLink>
        </button>
      </li>
      <li>
        <button>
          <NavLink to="/auth">Logout</NavLink>
        </button>
      </li>
    </ul>
  );
};

export default NavLinks;
