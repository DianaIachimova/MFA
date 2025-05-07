import { GET_OPEN_NEWS_DATA } from "./types";
import api from "../../services/api";

export const getOpenNewsData = (id) => async (dispatch) => {
  const endpoint = "/news/" + id;
  const data = await api.get(endpoint);

  dispatch({ type: GET_OPEN_NEWS_DATA, payload: { ...data } });
};
