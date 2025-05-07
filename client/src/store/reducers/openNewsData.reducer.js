import { GET_OPEN_NEWS_DATA } from "../actions/types";

const initialState = {};

const getOpenNewsData = (state = initialState, action) => {
  switch (action.type) {
    case GET_OPEN_NEWS_DATA:
      return { ...state, [action.payload.key]: action.payload };
    default:
      return state;
  }
};

export default getOpenNewsData;
