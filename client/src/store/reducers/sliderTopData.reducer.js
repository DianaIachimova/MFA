import { GET_SLIDER_TOP_DATA } from "../actions/types";

const initialState = [];

const getSliderTopData = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDER_TOP_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default getSliderTopData;
