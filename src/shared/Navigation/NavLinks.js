import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../UIElements/Button';
import NavMenuItems from './NavMenuItems';
import { navMenuData, navMenuDataLoggedOut } from './navMenuData';

import { authActions } from '../../store/auth-slice';
import classes from './NavLinks.module.css';

const NavLinks = props => {
  const menuLinks = [];
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

  if (isAuth) {
    navMenuData.forEach((menu, index) => {
      const depthLevel = 0;
      menuLinks.push(
        <NavMenuItems items={menu} key={index} depthLevel={depthLevel} />,
      );
    });
  } 
  if (!isAuth) {
    navMenuDataLoggedOut.forEach((menu, index) => {
      const depthLevel = 0;
      menuLinks.push(
        <NavMenuItems items={menu} key={index} depthLevel={depthLevel} />,
      );
    });
  }

  const loginHandler = event => {
    console.log('loginHandler...');
    if (!isAuth) {
      dispatch(authActions.login());
      history.push('/products');
    } else {
      dispatch(authActions.logout());
      history.push('/home');
    }
  };

  return (
    <React.Fragment>
      <nav className={classes['nav-container']}>
        <ul className={classes['nav-links']}>{menuLinks}</ul>
        <div className={classes.button}>
          {!isAuth && <Button onClick={loginHandler}>Login</Button>}
          {isAuth && <Button onClick={loginHandler} inverse>Logout</Button>}
        </div>
       
      </nav>
    </React.Fragment>
  );
};

export default NavLinks;
