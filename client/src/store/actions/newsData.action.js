import { GET_NEWS_DATA } from "./types";
import api from "../../services/api";

export const getNewsData = async (dispatch) => {
  const data = await api.get("/news");

  dispatch({ type: GET_NEWS_DATA, payload: [...data] });
};
