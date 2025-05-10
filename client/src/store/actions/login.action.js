import {
  USER_LOGIN,
  USER_LOGOUT,
  SETUP_2FA,
  VERIFY_2FA,
  DISABLE_2FA,
  LOGIN_2FA_REQUIRED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./types";
import api from "../../services/api";
import { getCartData } from "./cartData.actions";
import { resetCart } from "./resetCart.actions";

export const userLogin = (username, password, token) => async (dispatch) => {
  try {
    let response;
    
    if (token) {
      response = await api.post("/auth/2fa/verify", {
        username,
        token
      });
      
      if (response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('user', JSON.stringify(response));
        
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response
        });
        
        dispatch(getCartData());
      }
    } else {
      response = await api.post("/auth/signin", {
        username,
        password
      });
      
      if (response.twoFactorRequired) {
        dispatch({
          type: LOGIN_2FA_REQUIRED,
          payload: { username, password }
        });
      } else if (response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('user', JSON.stringify(response.user));
        
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response
        });
        
        dispatch(getCartData());
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: response.message || 'Login failed'
        });
      }
    }
  } catch (error) {
    console.error('Login error:', error);
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.message || error.message || 'Login failed'
    });
  }
};

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const login2FARequired = () => ({
  type: LOGIN_2FA_REQUIRED
});

export const setup2FA = () => ({
  type: SETUP_2FA
});

export const verify2FA = (token) => ({
  type: VERIFY_2FA,
  payload: { token }
});

export const disable2FA = (token) => ({
  type: DISABLE_2FA,
  payload: { token }
});

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
  
  dispatch({ 
    type: USER_LOGOUT 
  });

  dispatch({
    type: USER_LOGIN,
    payload: null
  });

  dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      accessToken: null,
      user: null
    }
  });

  dispatch(resetCart());
};

export const codeVerify = (code) => async (dispatch) => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      alert("No access token found!");
      return dispatch({ type: USER_LOGOUT, payload: {} });
    }

    const user = await api.post(
      "/auth/codeverify",
      { otp: code },
      { "x-access-token": token }
    );

    localStorage.setItem("accessToken", user.accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: USER_LOGIN, payload: { ...user } });
    dispatch(getCartData());
  } catch (error) {
    console.log(error);
    alert("No user found!");
    dispatch({ type: USER_LOGOUT, payload: {}, });
    return;
  }
};

export const userAuth = async (dispatch) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return;
  }

  try {
    const user = await api.get("/users/me", {}, { "x-access-token": token });
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: USER_LOGIN, payload: { ...user } });
    dispatch(getCartData());
  } catch {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    alert("No user found!");
    dispatch({ type: USER_LOGOUT, payload: {}, });
  }
};

export const logout = () => dispatch => {
  localStorage.clear();
  
  dispatch({
    type: USER_LOGOUT
  });
  
  dispatch({
    type: 'RESET_CART'
  });
};

export const autoLogin = () => async dispatch => {
  const accessToken = localStorage.getItem('accessToken');
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (accessToken && user) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { accessToken, user }
    });
    
    dispatch({
      type: USER_LOGIN,
      payload: user
    });
    
    dispatch(getCartData());
  }
};
