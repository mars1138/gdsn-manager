import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Logo from './Logo';
import Backdrop from '../UIElements/Backdrop';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={classes['drawer-nav']}>
          <NavLinks />
        </nav>
      </SideDrawer>

      <header className={classes.header}>
        <button className={classes['menu-btn']} onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <Logo />
        <h1 className={classes['header-title']}>
          <Link to="/">GDSN-Plus</Link>
        </h1>
        <nav className={classes['header-nav']}>
          <NavLinks />
        </nav>
      </header>
    </React.Fragment>
  );
};

export default MainHeader;
