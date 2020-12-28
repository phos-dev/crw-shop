import { 
    TOGGLE_CART_DROPDOWN, 
    ADD_ITEM,
    DECREASE_ITEM,
    DELETE_ITEM
} from "./constants";

export const toggle_cart_dropdown = () => ({
    type: TOGGLE_CART_DROPDOWN,
    payload: null
});

export const add_item = item => ({
    type: ADD_ITEM,
    payload: item
});

export const delete_item = item => ({
    type: DELETE_ITEM,
    payload: item
});

export const decrease_item_quantity = item => ({
    type: DECREASE_ITEM,
    payload: item
});