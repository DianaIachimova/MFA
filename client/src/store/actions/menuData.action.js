import { GET_CONTACTS_DATA, GET_MENU_DATA, GET_PARTNERS_DATA } from "./types";
import api from "../../services/api";

export const getMenuData = async (dispatch) => {
  const data = await api.get("/nav");

  dispatch({ type: GET_MENU_DATA, payload: [...data] });
};

export const getContactsData = async (dispatch) => {
  const data = await api.get("/contacts");

  dispatch({ type: GET_CONTACTS_DATA, payload: [...data] });
};

export const getPartnersData = async (dispatch) => {
  const data = await api.get("/partners");

  dispatch({ type: GET_PARTNERS_DATA, payload: [...data] });
};
