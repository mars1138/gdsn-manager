import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';

import Button from '../UIElements/Button';
import NavMenuItems from './NavMenuItems';
import { navMenuData } from './navMenuData';

import { authActions } from '../../store/auth-slice';
import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  const menuLinks = navMenuData.map((menu, index) => {
    const depthLevel = 0;
    return <NavMenuItems items={menu} key={index} depthLevel={depthLevel} />;
  });

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    console.log('loginHandler...');
    !isAuth ? dispatch(authActions.login()) : dispatch(authActions.logout());
  };

  return (
    <React.Fragment>
      <nav className={classes['nav-container']}>
        <ul className={classes['nav-links']}>{menuLinks}</ul>
        <div className={classes.button}>
          {!isAuth && (
            <Button onClick={loginHandler}>
              Login
            </Button>
          )}
          {isAuth && (
            <Button onClick={loginHandler}>
              Logout
            </Button>
          )}
        </div>
        {/* <Button to="/auth" inverse>
              Logout
            </Button> */}
      </nav>
    </React.Fragment>
  );
};

export default NavLinks;
