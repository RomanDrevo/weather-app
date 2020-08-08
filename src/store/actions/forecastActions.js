import types from '../actionsTypes';

export const getCityForecast = data =>{
  return{
    type: types.GET_CITY_FORECAST,
    payload: data
  };
};

export const setForecastResultToStore = data =>{
  return{
    type: types.SET_FORECAST_RESULT_TO_STORE,
    payload: data
  };
};

export const setCity = data =>{
  return{
    type: types.SET_CITY,
    payload: data
  };
};

