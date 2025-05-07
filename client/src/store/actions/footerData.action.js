import { GET_FOOTER_DATA } from "./types";
import api from "../../services/api";

export const getFooterData = async (dispatch) => {
  const data = await api.get("/footer");

  dispatch({ type: GET_FOOTER_DATA, payload: [...data] });
};
