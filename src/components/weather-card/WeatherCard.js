import { Card, CardContent, CardHeader, CardMedia, Divider, Typography } from '@material-ui/core';
import WeatherCardSubheader from '../WeatherCardSubheader';
import Forecast from '../Forecast';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from './WeatherCard.module.scss';

const useStyles = makeStyles(theme => ({
  buttons: {
    color: 'black'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  error: {
    color: 'red',
    padding: '10px'
  },
  fullList: {
    width: 'auto'
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  recommendation: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '20px 0px 10px 0px',
    fontSize: '26px',
    textAlign: 'center'
  },
  root: {
    flexiGrow: 1,
    color: 'black'
  },
  search: {
    marginTop: '100px'
  }
}));

const WeatherCard = props => {
  const humidity = 'wi wi-humidity';
  const strongWind = 'wi wi-strong-wind';
  const { currentWeather, forecast, icon, recommendation } = props;

  return (
    <Card className={style['weather-card-wrapper']}>
      <CardHeader
        title={currentWeather.city + ', ' + currentWeather.country}
        subheader={<WeatherCardSubheader currentWeather={currentWeather} />}
      />
      <CardContent>
        <CardMedia
          className={`${icon} wi`}
          src={icon}
          style={{ fontSize: '128px', float: 'right' }}
        />
        <Typography
          variant="h2"
          className="big-temp"
          color="textPrimary"
          component="h2"
          style={{ fontFamily: 'Montserrat', paddingTop: '30px' }}
        >
          {Math.round(currentWeather.temperature)}&deg;C
        </Typography>
        <Typography
          variant="subtitle2"
          className="atmospheric-conditions"
          color="textSecondary"
          gutterBottom
          style={{ paddingTop: '40px' }}
        >
          <span
            className={`${strongWind} wi atmospheric`}
          />
          {currentWeather.wind_speed} km/h Winds{' '}
          <span
            className={`${humidity} wi atmospheric`}
          />
          {currentWeather.humidity}% Humidity
        </Typography>
        <Typography
          className='recommendation'
          color="textPrimary"
          gutterBottom
        >
          {recommendation}
        </Typography>
        <Divider variant="middle" />
        <Forecast forecast={forecast} />
      </CardContent>
    </Card>
  );
};

export default WeatherCard;