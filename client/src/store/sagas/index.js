import { all } from 'redux-saga/effects';
import { authSaga } from './auth.saga';
import { menuDataSaga } from './menuData.saga';
import { cartDataSaga } from './cartData.saga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    menuDataSaga(),
    cartDataSaga()
  ]);
} 