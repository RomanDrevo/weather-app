import React from 'react';
import moment from 'moment';
import style from './MiniWeatherCard.module.scss';

const MiniWeatherCard = ({ onClick, forecastList, unit, locale }) => {
  if (forecastList !== undefined && forecastList.length > 0) {
    const first = forecastList[0];

    const src = `http://openweathermap.org/img/wn/${first.icon}.png`;

    const maxAndMin = forecastList.reduce(
      (acc, current) => {
        if (current.temp_max > acc.max) {
          acc.max = current.temp_max;
        }
        if (current.temp_min < acc.min) {
          acc.min = current.temp_min;
        }
        return acc;
      },
      { max: Number.MIN_VALUE, min: Number.MAX_VALUE },
    );
    return (
      <div className={style['mini-weather-card-wrapper']}>
        <div className='container' onClick={onClick}>
          <div className='text'>
            {moment
              .unix(first.dt)
              .locale(locale)
              .format('dddd')}
          </div>
          <img alt='icon' className='icon' src={src} />
          <div className='text'>
            {Math.round(maxAndMin.max * 10) / 10}&deg;{unit === 'metric' ? 'C' : 'F'}
          </div>
          <div className='text'>
            {Math.round(maxAndMin.min * 10) / 10}&deg;{unit === 'metric' ? 'C' : 'F'}
          </div>
        </div>
      </div>
    );
  }
  return <div />;
};

export default MiniWeatherCard;

