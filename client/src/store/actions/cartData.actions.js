import { SET_CART_DATA } from "./types";
import api from "../../services/api";

export const getCartData = async (dispatch) => {
  try {
    const token = localStorage.getItem("accessToken");
    const data = await api.get("/cart", null, { "x-access-token": token });

    dispatch({ type: SET_CART_DATA, payload: [...data] });
  } catch {
    console.log("User has no cart products");
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

      dispatch({ type: SET_CART_DATA, payload: [...data] });
    } catch (error) {
      alert("Could not add product to cart", error);
    }
  };

export const removeProduct = (productId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("accessToken");
    const data = await api.delete(
      "/cart",
      { productId },
      { "x-access-token": token }
    );

    dispatch({ type: SET_CART_DATA, payload: [...data] });
  } catch (error) {
    alert("Could not remove product from cart", error);
  }
};
