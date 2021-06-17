import { ALL_USERS } from "../constans/userConstants";
import { ACTIVE_USER } from "../constans/userConstants";

const users = {
  User: [],
  Active: [],
};
export const userReducer = (state = users, action) => {
  let Pusher = state.cartPusher;
  switch (action.type) {
    case ACTIVE_USER: {
      Pusher.push(action.payload);
      return {
        ...state,
        Pusher: [...state.cartPusher, action.payload],
      };
    }
    case ALL_USERS: {
      return {
        ...state,
        list: [...state.list, action.payload],
        /*  cart: [...state.menu, action.payload], */
      };
    }
    default:
      return state;
  }
};
