import { GET_PRODUCTS_DATA } from "./types";
import api from "../../services/api";

export const getProductsData = async (dispatch) => {
  const data = await api.get("/category");

  dispatch({ type: GET_PRODUCTS_DATA, payload: [...data] });
};
