import { GET_FOOTER_DATA } from "../actions/types";

const initialState = [];

const getFooterData = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOTER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default getFooterData;
