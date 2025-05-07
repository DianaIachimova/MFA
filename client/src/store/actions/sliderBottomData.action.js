import { GET_SLIDER_BOTTOM_DATA } from "./types";
import api from "../../services/api";

export const getSliderBottomData = async (dispatch) => {
  const data = await api.get("/sliderBottom");

  dispatch({ type: GET_SLIDER_BOTTOM_DATA, payload: [...data] });
};
