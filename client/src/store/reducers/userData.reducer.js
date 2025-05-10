import {
  USER_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_2FA_REQUIRED,
  USER_LOGOUT,
  TOGGLE_2FA_REQUEST,
  TOGGLE_2FA_SUCCESS,
  TOGGLE_2FA_FAILURE
} from '../types';

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  twoFactorRequired: false,
  accessToken: null,
  tempCredentials: null,
  success: null,
  user: null,
  qrCode: null,
  secret: null,
  twoFactorEnabled: false
};

const emptyState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  twoFactorRequired: false,
  accessToken: null,
  tempCredentials: null,
  success: null,
  user: null,
  qrCode: null,
  secret: null,
  twoFactorEnabled: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loading: false,
        error: null,
        isAuthenticated: true,
        _id: action.payload?._id,
        username: action.payload?.username,
        email: action.payload?.email,
        twoFactorEnabled: action.payload?.twoFactorEnabled
      };

    case LOGIN_SUCCESS:
      const userData = action.payload.user || action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        isAuthenticated: true,
        twoFactorRequired: false,
        accessToken: action.payload.accessToken,
        _id: userData._id,
        username: userData.username,
        email: userData.email,
        twoFactorEnabled: userData.twoFactorEnabled,
        tempCredentials: null,
        success: "Login successful"
      };

    case LOGIN_FAILURE:
      return {
        ...emptyState,
        error: action.payload
      };

    case LOGIN_2FA_REQUIRED:
      return {
        ...state,
        loading: false,
        error: null,
        twoFactorRequired: true,
        tempCredentials: {
          username: action.payload.username,
          password: action.payload.password
        }
      };

    case USER_LOGOUT:
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      return {
        ...emptyState
      };

    case TOGGLE_2FA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case TOGGLE_2FA_SUCCESS:
      return {
        ...state,
        loading: false,
        twoFactorEnabled: action.payload.twoFactorEnabled
      };

    case TOGGLE_2FA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
