import actionsTypes from '../actionsTypes';
import createReducer from '../reducers/createReducer';

const initialState = {
  data: null
};

const forecastReducer = createReducer(initialState, {
  [actionsTypes.SET_FORECAST_RESULT_TO_STORE]: (state, {payload}) => {
    console.log(payload);
    return {
      ...state,
      data: payload
    };
  },
});

export default forecastReducer;

