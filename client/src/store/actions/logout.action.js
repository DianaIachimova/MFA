import { USER_LOGOUT } from "./types";

export const userLogout = async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
