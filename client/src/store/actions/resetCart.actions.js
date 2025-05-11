import { RESET_CART } from "./types";

export const resetCart = () => (dispatch) => {
  dispatch({ type: RESET_CART });
};
