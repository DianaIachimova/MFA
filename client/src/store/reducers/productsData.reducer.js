import { GET_PRODUCTS_DATA } from "../actions/types";

const initialState = [];

const getProductsData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default getProductsData;
