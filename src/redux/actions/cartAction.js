/*import * as actionTypes from "../constans/cartConstants";
import axios from "axios";

export const addToCart = (rend) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8001/api/coffee/`);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data.title,
      title: data.title,
      price: data.price,
      rend,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
*/
export const setCart = (cart) => {
  console.log(cart);
  return {
    type: "ADD_TO_CART",
    payload: cart,
  };
};
export const addQuantity = (price) => {
  return {
    type: "ADD_QUANTITY",
    payload: price,
  };
};
export const redQuantity = (price) => {
  return {
    type: "REDUCE_QUANTITY",
    payload: price,
  };
};
