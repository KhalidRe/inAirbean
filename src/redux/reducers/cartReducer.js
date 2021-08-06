import { setAll } from "../actions/userAction";
import { ADD_TO_CART } from "../constans/cartConstants";
import { ADD_QUANTITY } from "../constans/cartConstants";
import { GET_PRODUCTS_REQUEST } from "../constans/productConstants";
import { ACTIVE_USER } from "../constans/userConstants";
import { ALL_USERS } from "../constans/userConstants";
import { REDUCE_QUANTITY } from "../constans/cartConstants";
import { GET_TOTAL } from "../constans/productConstants";
import { CURRENT_ACC } from "../constans/userConstants";

const All = {
  cartPusher: [],
  list: [],
  Users: [],
  activeUser: [],
  Receit: [],
  Current: "",
};
export const cartReducer = (state = All, action) => {
  let Pusher = state.cartPusher;
  let setter = state.activeUser;
  let qty = 1;

  switch (action.type) {
    case ADD_TO_CART: {
      Pusher.push(action.payload);

      return {
        ...state,
        Pusher: [...state.cartPusher, action.payload],
      };
    }
    case ADD_QUANTITY:
      return {
        ...state,

        cartPusher: state.cartPusher.map((product) =>
          product.id === action.id
            ? { ...product, qty: ++product.qty }
            : product
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,

        cartPusher: state.cartPusher.map((product) =>
          product.id === action.id
            ? { ...product, price: ++product.price }
            : product
        ),
      };

    case REDUCE_QUANTITY:
      return {
        ...state,

        cartPusher: state.cartPusher.map((product) =>
          product.id === action.id
            ? { ...product, qty: --product.qty }
            : product
        ),
      };

    /* ...state,
        cartPusher: state.cartPusher.map((product) =>
          product.id === action.id
            ? { ...product, qty: product.qty + 1 }
            : product
        ),
      */
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case GET_TOTAL: {
      return {
        ...state,
        Receit: [...state.Receit, action.payload],
      };
    }
    case ACTIVE_USER: {
      setter.push(action.payload);

      return {
        ...state,
        setter: [...state.activeUser, action.payload],
      };
    }

    case ALL_USERS: {
      return {
        ...state,
        Users: [...state.Users, action.payload],
      };
    }
    case CURRENT_ACC: {
      return {
        ...state,
        Current: [...state.Current, action.payload],
      };
    }
    /*case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((x) => x.product !== action.payload),
      };
*/
    default:
      return state;
  }
};

export default cartReducer;
