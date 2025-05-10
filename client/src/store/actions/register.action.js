import {
  USER_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SETUP_2FA_SUCCESS,
  REGISTER_STEP_SUCCESS,
  RESET_REGISTRATION_STEP,
  USER_LOGIN,
  LOGIN_SUCCESS
} from './types';
import api from '../../services/api';


export const userRegister = (username, email, password, confirmPassword, token) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER });

    if (token) {
      const verifyResponse = await api.post('/auth/2fa/verify', {
        username,
        token
      });

      if (!verifyResponse.accessToken) {
        throw new Error('Invalid 2FA code');
      }

      localStorage.setItem('accessToken', verifyResponse.accessToken);
      localStorage.setItem('user', JSON.stringify({
        _id: verifyResponse._id,
        username: verifyResponse.username,
        email: verifyResponse.email,
        twoFactorEnabled: verifyResponse.twoFactorEnabled
      }));
      
      dispatch({
        type: REGISTER_SUCCESS,
        payload: verifyResponse
      });

      dispatch({
        type: LOGIN_SUCCESS,
        payload: verifyResponse
      });

      return;
    }

    const response = await api.post('/auth/signup', {
      username,
      email,
      password,
      confirmPassword
    });

    if (!response.user || response.message !== "User was registered successfully!") {
      throw new Error(response?.message || 'Registration failed');
    }

    localStorage.setItem('user', JSON.stringify(response.user));
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        ...response.user,
        accessToken: null
      }
    });

    dispatch({ type: REGISTER_STEP_SUCCESS });

    const qrResponse = await api.post('/auth/2fa/setup', { username });

    if (!qrResponse.qrCode) {
      throw new Error('Failed to get QR code');
    }

    dispatch({
      type: SETUP_2FA_SUCCESS,
      payload: {
        qrCode: qrResponse.qrCode,
        username
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response?.data?.message || error.message || 'Registration failed'
    });
  }
};

export const resetRegistrationStep = () => ({
  type: RESET_REGISTRATION_STEP
}); 