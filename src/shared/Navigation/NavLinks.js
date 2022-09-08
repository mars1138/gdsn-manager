import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  return (
    <ul className={classes["nav-links"]}>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products/new">Add Product Item</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Login</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Logout</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
