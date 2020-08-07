import React  from 'react';
import { AppBar, Toolbar, Select, MenuItem } from '@material-ui/core';

import logo from '../../assets/about.png';
import style from './Navbar.module.scss';

const NavBar = () => {

  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  return (
    <div className={style['navbar-wrapper']}>
      <div className='app-bar'>
        <Select
          className='select-city'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          onChange={handleChange}
        >
          <MenuItem value='ashdod'>Ashdod</MenuItem>
          <MenuItem value='jerusalem'>Jerusalem</MenuItem>
          <MenuItem value='haifa'>Haifa</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default NavBar;
