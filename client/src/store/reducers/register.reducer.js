import {
  USER_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SETUP_2FA_SUCCESS,
  REGISTER_STEP_SUCCESS,
  RESET_REGISTRATION_STEP
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  success: false,
  qrCode: null,
  username: null,
  registrationStep: 1
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        loading: true,
        error: null,
        success: false
      };
    case REGISTER_STEP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        registrationStep: 2
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        registrationStep: 3
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false
      };
    case SETUP_2FA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        qrCode: action.payload.qrCode,
        username: action.payload.username
      };
    case RESET_REGISTRATION_STEP:
      return initialState;
    default:
      return state;
  }
} 