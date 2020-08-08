import React, { useState } from 'react';
import WeatherBannerTab from '../weather-banner-tab/WeatherBannerTab';
import MiniWeatherCard from '../mini-weather-card/MiniWeatherCard';
import style from './WeatherWidget.module.scss';
import { mapForecast } from '../../utils/helpers';

const WeatherWidget = ({ forecast, config }) => {

  const [forecastIdx, setForecastIdx] = useState(0);
  const [forecastOfDayList, ] = useState(mapForecast(forecast));

  const renderEmpty = () => {
    return (
      <div>
        <h3>No forecast!? Check your props data!</h3>
      </div>
    );
  };

  if (!forecast) {
    return renderEmpty();
  }

  const handleOnClick = index => {
    setForecastIdx(index);
  };

  return (
    <div className={style['weather-widget-wrapper']}>
      <WeatherBannerTab
        className=""
        location={config.location}
        forecastOfDay={forecastOfDayList[forecastIdx]}
        unit={config.unit}
        locale={config.locale}
      />
      <div className='next-container'>
        <MiniWeatherCard
          onClick={() => handleOnClick(0)}
          forecastList={forecastOfDayList[0]}
          unit={config.unit}
          locale={config.locale}
        />
        <MiniWeatherCard
          onClick={() => handleOnClick(1)}
          forecastList={forecastOfDayList[1]}
          unit={config.unit}
          locale={config.locale}
        />
        <MiniWeatherCard
          onClick={() => handleOnClick(2)}
          forecastList={forecastOfDayList[2]}
          unit={config.unit}
          locale={config.locale}
        />
        <MiniWeatherCard
          onClick={() => handleOnClick(3)}
          forecastList={forecastOfDayList[3]}
          unit={config.unit}
          locale={config.locale}
        />
        <MiniWeatherCard
          onClick={() => handleOnClick(4)}
          forecastList={forecastOfDayList[4]}
          unit={config.unit}
          locale={config.locale}
        />
      </div>
    </div>
  );
};

export default WeatherWidget;
