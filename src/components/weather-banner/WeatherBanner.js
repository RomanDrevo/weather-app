import React from 'react';
import moment from 'moment';
import style from './WeatherBanner.module.scss';

const WeatherBanner = ({ data, unit }) => {

  const src = `http://openweathermap.org/img/wn/${data.icon}.png`;

  return (
    <div className={style['weather-banner-wrapper']}>
      <h5>
        {`${moment
          .unix(data.dt)
          // .locale(locale)
          .format('dddd a h:mm')}, ${data.desc}`}
      </h5>
      <div className='banner-container'>
        <img alt='banner-icon' className='banner-icon' src={src}/>
        <div className='temperature'>{Math.round(data.temp * 10) / 10}</div>
        <div className='unit'>&deg;{unit === 'metric' ? 'C' : 'F'}</div>
        <div style={{ flex: '1' }}/>
        <div className='detail-container'>
          <div className='info-text'>
            Clouds: <b>{data.clouds}%</b>
          </div>
          <div className='info-text'>
            Humidity: <b>{data.humidity}%</b>
          </div>
          <div className='info-text'>
            Wind:{' '}
            <b>
              {data.wind}
              {unit === 'metric' ? 'm/s' : 'mph'}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBanner;

