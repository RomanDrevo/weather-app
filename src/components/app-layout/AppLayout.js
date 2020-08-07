import React from 'react';
import { Grid } from '@material-ui/core';
import style from './AppLayout.module.scss';
import WeatherCard from '../weather-card/WeatherCard';

const AppLayout = (props) => {
  const { currentWeather, forecast, icon, recommendation } = props;

  return (
    <div className={style['app-layout-wrapper']}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WeatherCard
            currentWeather={currentWeather}
            forecast={forecast}
            icon={icon}
            recommendation={recommendation}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default AppLayout;

