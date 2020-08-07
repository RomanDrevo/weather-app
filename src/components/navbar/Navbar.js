import React  from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../../assets/about.png';
import style from './Navbar.module.scss';

const NavBar = () => {
  return (
    <div className={style['navbar-wrapper']}>
      <AppBar className='app-bar'>
        <Toolbar variant="dense">
          <img src={logo} className='app-logo' alt="logo" />
          <div style={{ flex: '1 1 auto' }} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
