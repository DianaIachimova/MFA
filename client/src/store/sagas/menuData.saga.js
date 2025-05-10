import { takeEvery } from 'redux-saga/effects';
import { GET_MENU_DATA } from '../actions/types';

export function* menuDataSaga() {
  yield takeEvery(GET_MENU_DATA, fetchMenuData);
}

function* fetchMenuData() {
} 