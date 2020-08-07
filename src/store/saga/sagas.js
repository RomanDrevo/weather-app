import { call, put } from 'redux-saga/effects';

import { getCityForecastApi } from '../../api';
import { setLoading } from '../actions/uIStateActions';
import { setForecastResultToStore } from '../actions/forecastActions';

export function* getCityForecastSaga(data) {
  try {
    yield put(setLoading(true));

    const result = yield call(getCityForecastApi, data.payload);

    console.log(result);

    if (result.status === 200 && result.data) {
      yield put(setForecastResultToStore(result.data));
    }

    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log('--err: ', error);
    // yield put({ type: types.ACTION_FAILED, payload: error.message });
  }
}
