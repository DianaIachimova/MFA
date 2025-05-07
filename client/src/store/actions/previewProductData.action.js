import { GET_PREVIEW_PRODUCT_DATA } from "./types";
import api from "../../services/api";

export const getPreviewProductData = (key) => async (dispatch) => {
  const endpoint = "/products/" + key;
  const data = await api.get(endpoint);

  dispatch({ type: GET_PREVIEW_PRODUCT_DATA, payload: { ...data } });
};
