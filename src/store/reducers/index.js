import { combineReducers } from 'redux';
import forecastReducer from './forecastReducer';
import uIStateReducer from './uIStateReducer';

export default combineReducers({
  uIStateReducer,
  forecastReducer
});
