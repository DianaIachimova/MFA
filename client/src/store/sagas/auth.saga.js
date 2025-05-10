import { takeLatest, put, call } from 'redux-saga/effects';
import {
  USER_LOGOUT,
  SETUP_2FA,
  VERIFY_2FA,
  DISABLE_2FA,
  SETUP_2FA_SUCCESS,
  SETUP_2FA_FAILURE,
  VERIFY_2FA_SUCCESS,
  VERIFY_2FA_FAILURE,
  DISABLE_2FA_SUCCESS,
  DISABLE_2FA_FAILURE,
  CLEAR_2FA_STATE,
} from '../actions/types';
import api from '../../services/api';

function* handleSetup2FA(action) {
  try {
    const response = yield call(api.post, '/auth/2fa/setup', action.payload);
    yield put({ type: SETUP_2FA_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: SETUP_2FA_FAILURE, error: error.message });
  }
}

function* handleVerify2FA(action) {
  try {
    const response = yield call(api.post, '/auth/2fa/verify', action.payload);
    yield put({ type: VERIFY_2FA_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: VERIFY_2FA_FAILURE, error: error.message });
  }
}

function* handleDisable2FA(action) {
  try {
    const response = yield call(api.post, '/auth/2fa/disable', action.payload);
    yield put({ type: DISABLE_2FA_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: DISABLE_2FA_FAILURE, error: error.message });
  }
}

function* handleLogout() {
  localStorage.removeItem('accessToken');
  yield put({ type: CLEAR_2FA_STATE });
}

export function* authSaga() {
  yield takeLatest(SETUP_2FA, handleSetup2FA);
  yield takeLatest(VERIFY_2FA, handleVerify2FA);
  yield takeLatest(DISABLE_2FA, handleDisable2FA);
  yield takeLatest(USER_LOGOUT, handleLogout);
} 