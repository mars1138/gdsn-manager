import React from 'react';
import { Navlink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <Navlink to="/">Home</Navlink>
      </li>
      <li>
        <Navlink to="/products/new">Add Product Item</Navlink>
      </li>
      <li>
        <Navlink to="/auth">Login</Navlink>
      </li>
      <li>
        <Navlink to="/auth">Logout</Navlink>
      </li>
    </ul>
  );
};

export default NavLinks;
