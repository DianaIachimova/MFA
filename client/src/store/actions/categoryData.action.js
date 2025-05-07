import { GET_CATEGORY_DATA } from "./types";
import api from "../../services/api";

export const getCategoryData = (key) => async (dispatch) => {
  const endpoint = "/category/" + key;
  const data = await api.get(endpoint);

  dispatch({ type: GET_CATEGORY_DATA, payload: { ...data } });
};
