import {takeEvery} from 'redux-saga/effects';
import types from '../actionsTypes';
import { getCityForecastSaga } from './sagas';

export function* watchSaga() {
  yield takeEvery(types.GET_CITY_FORECAST, getCityForecastSaga);
}
