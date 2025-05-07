import { GET_PREVIEW_PRODUCT_DATA } from "../actions/types";

const initialState = {};

const getPreviewProductData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PREVIEW_PRODUCT_DATA:
      return { ...state, [action.payload.key]: action.payload };
    default:
      return state;
  }
};

export default getPreviewProductData;
