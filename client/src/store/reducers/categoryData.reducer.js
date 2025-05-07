import { GET_CATEGORY_DATA } from "../actions/types";

const initialState = {};

const getCategoryData = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_DATA:
      return { ...state, [action.payload.key]: action.payload };
    default:
      return state;
  }
};

export default getCategoryData;
