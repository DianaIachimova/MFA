import { USER_LOGIN, USER_LOGOUT } from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("user")) || {};

const getUserData = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...action.payload };
    case USER_LOGOUT:
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      return {};
    default:
      return state;
  }
};

export default getUserData;
