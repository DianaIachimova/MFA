import {
  USER_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_2FA_REQUIRED,
  SETUP_2FA_SUCCESS,
  SETUP_2FA_FAILURE,
  VERIFY_2FA_SUCCESS,
  VERIFY_2FA_FAILURE,
  DISABLE_2FA_SUCCESS,
  DISABLE_2FA_FAILURE,
  TWO_FACTOR_VERIFIED,
  CLEAR_2FA_STATE,
  USER_LOGOUT
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  success: null,
  twoFactorRequired: false,
  qrCode: null,
  secret: null,
  accessToken: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
        success: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: 'Login successful',
        accessToken: action.payload.accessToken,
        twoFactorRequired: false
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
        accessToken: null
      };

    case LOGIN_2FA_REQUIRED:
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
        twoFactorRequired: true
      };

    case TWO_FACTOR_VERIFIED:
      return {
        ...state,
        twoFactorRequired: false,
        twoFactorVerified: true,
        loading: false,
        success: 'Login successful'
      };

    case CLEAR_2FA_STATE:
      return {
        ...state,
        error: null,
        success: null
      };

    case SETUP_2FA_SUCCESS:
      return {
        ...state,
        qrCode: action.payload.qrCode,
        secret: action.payload.secret,
        error: null,
        success: 'QR code generated successfully',
        loading: false
      };

    case SETUP_2FA_FAILURE:
      return {
        ...state,
        error: action.error,
        success: null,
        loading: false
      };

    case VERIFY_2FA_SUCCESS:
      return {
        ...state,
        twoFactorRequired: false,
        error: null,
        success: '2FA enabled successfully',
        loading: false
      };

    case VERIFY_2FA_FAILURE:
      return {
        ...state,
        error: action.error,
        success: null,
        loading: false
      };

    case DISABLE_2FA_SUCCESS:
      return {
        ...state,
        qrCode: null,
        secret: null,
        error: null,
        success: '2FA disabled successfully',
        loading: false
      };

    case DISABLE_2FA_FAILURE:
      return {
        ...state,
        error: action.error,
        success: null,
        loading: false
      };

    case USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
} 