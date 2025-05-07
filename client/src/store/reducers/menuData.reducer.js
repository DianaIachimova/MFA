import {
  GET_CONTACTS_DATA,
  GET_MENU_DATA,
  GET_PARTNERS_DATA,
} from "../actions/types";

const initialState = {
  nav: [],
  phoneNumbers: [],
  partners: [],
};

const getMenuData = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_DATA:
      return {
        ...state,
        nav: action.payload,
      };
    case GET_CONTACTS_DATA:
      return {
        ...state,
        phoneNumbers: action.payload,
      };
    case GET_PARTNERS_DATA:
      return {
        ...state,
        partners: action.payload,
      };
    default:
      return state;
  }
};

export default getMenuData;
