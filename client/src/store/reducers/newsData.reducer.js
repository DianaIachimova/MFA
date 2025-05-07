import { GET_NEWS_DATA } from "../actions/types";

const initialState = [];

const getNewsData = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default getNewsData;
