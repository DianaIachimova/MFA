import { GET_SLIDER_BOTTOM_DATA } from "../actions/types";

const initialState = [];

const getSliderBottomData = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDER_BOTTOM_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default getSliderBottomData;
