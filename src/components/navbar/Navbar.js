import React  from 'react';
import { Select, MenuItem } from '@material-ui/core';
import style from './Navbar.module.scss';

const NavBar = ({onChange, city}) => {

  const handleChange = event => {
    onChange(event.target.value);
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
          <MenuItem value='Ashdod'>Ashdod</MenuItem>
          <MenuItem value='Jerusalem'>Jerusalem</MenuItem>
          <MenuItem value='Haifa'>Haifa</MenuItem>
          <MenuItem value='Tel Aviv'>Tel Aviv</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default NavBar;
