import { ADD_TO_CART } from "../constans/cartConstants";
import { REMOVE_FROM_CART } from "../constans/cartConstants";
import { GET_PRODUCTS_REQUEST } from "../constans/productConstants";
import { ACTIVE_USER } from "../constans/userConstants";
import { ALL_USERS } from "../constans/userConstants";
const All = {
  cartPusher: [],
  list: [],
  Users: [],
  activeUser: [],
};
export const cartReducer = (state = All, action) => {
  let Pusher = state.cartPusher;
  let setter = state.activeUser;
  switch (action.type) {
    case ADD_TO_CART: {
      Pusher.push(action.payload);
      return {
        ...state,
        Pusher: [...state.cartPusher, action.payload],
      };
    }
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        list: [...state.list, action.payload],
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
