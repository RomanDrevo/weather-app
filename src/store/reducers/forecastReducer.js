import actionsTypes from '../actionsTypes';
import createReducer from '../reducers/createReducer';

const initialState = {
  data: null,
  city: 'Ashdod'
};

const forecastReducer = createReducer(initialState, {
  [actionsTypes.SET_FORECAST_RESULT_TO_STORE]: (state, {payload}) => {
    return {
      ...state,
      data: payload
    };
  },
  [actionsTypes.SET_CITY]: (state, {payload}) => {
    return {
      ...state,
      city: payload
    };
  },
});


export default forecastReducer;

