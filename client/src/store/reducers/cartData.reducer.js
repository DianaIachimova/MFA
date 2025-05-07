import { RESET_CART, SET_CART_DATA } from "../actions/types";

const initialState = [];

const getCartData = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_DATA:
      return [...action.payload];
    case RESET_CART:
      return [];
    default:
      return state;
  }
};

export default getCartData;
