import { USER_LOGIN, TOGGLE_2FA_REQUEST, TOGGLE_2FA_SUCCESS, TOGGLE_2FA_FAILURE } from '../types';
import { authService } from '../../services/auth.service';

export const userLogin = (userData) => ({
  type: USER_LOGIN,
  payload: userData
});

export const toggle2FA = (enabled) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_2FA_REQUEST });
      
      const response = await authService.toggle2FA(enabled);
      
      dispatch({
        type: TOGGLE_2FA_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: TOGGLE_2FA_FAILURE,
        payload: error.message
      });
    }
  };
}; 