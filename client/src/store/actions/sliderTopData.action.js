import { GET_SLIDER_TOP_DATA } from "./types";
import api from "../../services/api";

export const getSliderTopData = async (dispatch) => {
  const data = await api.get("/sliderTop");

  dispatch({ type: GET_SLIDER_TOP_DATA, payload: [...data] });
};
