import { createSelector } from 'reselect';

export const getCity = state => state?.forecastReducer?.city;

export const getForecastData = state => state?.forecastReducer?.data;

export const getMappedForecast = createSelector(getForecastData, (forecast) => {
  const data = forecast?.list.map(data => (
    {
      dt: data.dt,
      temp: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
      desc: data.weather[0].description,
      clouds: data.clouds.all,
      wind: data.wind.speed,
    }));

  return data;
});

export const isLoading = state => state.uIStateReducer.isLoading;
