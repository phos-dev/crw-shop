import { add_to_cart, decrease_from_cart, delete_from_cart } from './cart.utils';
import {
  ADD_ITEM,
  TOGGLE_CART_DROPDOWN,
  DELETE_ITEM,
  DECREASE_ITEM
} from './constants';
const initialState = {
  cart: [],
  hidden: true,
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM: {
      return {
        ...state,
        cart: add_to_cart(state.cart, action.payload),
        total: state.total + action.payload.price
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        cart: decrease_from_cart(state.cart, action.payload),
        total: state.total - action.payload.price
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        cart: delete_from_cart(state.cart, action.payload),
        total: state.total - action.payload.price * action.payload.quantity
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
