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
        <ul className={classes['nav-links']}>{menuLinks}</ul>
        <div className={classes.button}>
          <Button to="/auth">Login</Button>
        </div>
        {/* <Button to="/auth" inverse>
              Logout
            </Button> */}
      </nav>
    </React.Fragment>
  );
};

export default NavLinks;
