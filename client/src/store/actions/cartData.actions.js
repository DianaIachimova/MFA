import { SET_CART_DATA } from "./types";
import api from "../../services/api";

export const getCartData = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("accessToken");
    console.log('Getting cart with token:', token);
    
    const data = await api.get("/cart", null, { "x-access-token": token });
    console.log('Cart data received:', data);

    if (Array.isArray(data)) {
      dispatch({ type: SET_CART_DATA, payload: data });
    } else {
      console.error('Cart data is not an array:', data);
      dispatch({ type: SET_CART_DATA, payload: [] });
    }
  } catch (error) {
    console.error("Error getting cart:", error);
    dispatch({ type: SET_CART_DATA, payload: [] });
  }
};

export const addCartProduct =
  (productId, quantity = 1) =>
  async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");
      const data = await api.post(
        "/cart",
        { productId, quantity },
        { "x-access-token": token }
      );

      if (Array.isArray(data)) {
        dispatch({ type: SET_CART_DATA, payload: data });
      } else {
        console.error('Cart data after add is not an array:', data);
        dispatch({ type: SET_CART_DATA, payload: [] });
      }
    } catch (error) {
      console.error("Could not add product to cart:", error);
      alert("Could not add product to cart");
    }
  };

export const removeProduct = (productId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("accessToken");
    const data = await api.delete(
      `/cart/${productId}`,
      null,
      { "x-access-token": token }
    );

    if (Array.isArray(data)) {
      dispatch({ type: SET_CART_DATA, payload: data });
    } else {
      console.error('Cart data after remove is not an array:', data);
      dispatch({ type: SET_CART_DATA, payload: [] });
    }
  } catch (error) {
    console.error("Could not remove product from cart:", error);
    alert("Could not remove product from cart");
  }
};
