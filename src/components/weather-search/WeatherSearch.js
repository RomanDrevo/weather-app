import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Tooltip,
  Typography
} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import style from './WeatherSearch.module.scss';

import useDebounce from '../../use-debounce';


export default function WeatherSearch(props) {
  const { onCityChange, error } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const hasError = !!error;

  const handleSearch = event => {
    setSearching(true);
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      onCityChange(debouncedSearchTerm);
      setSearching(false);
    }
  }, [onCityChange, debouncedSearchTerm, isSearching]);

  return (
    <div className={style['weather-search-wrapper']}>
      <Grid container alignItems="flex-end">
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <FormControl>
            <InputLabel htmlFor="search-city">Enter city name</InputLabel>
            <Input
              id="search-city"
              role="search"
              type="text"
              error={hasError}
              onChange={handleSearch}
              startAdornment={
                <InputAdornment position="start">
                  <Tooltip title="Optional: Enter a two-letter country code after the city name to make the search more precise. For example, London, GB.">
                    <Search />
                  </Tooltip>
                </InputAdornment>
              }
              endAdornment={
                isSearching && (
                  <InputAdornment position="end">
                    <CircularProgress size={20} />
                  </InputAdornment>
                )
              }
            />
            {error && (
              <Typography className='error'>{error}</Typography>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
