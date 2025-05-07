import { RESET_CART } from "./types";

export const resetCart = async (dispatch) => {
  dispatch({ type: RESET_CART });
};
