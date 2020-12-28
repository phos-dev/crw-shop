import {
    ADD_ITEM, 
    TOGGLE_CART_DROPDOWN,
    DELETE_ITEM,
    DECREASE_ITEM
} from './constants'
const initialState = {
    cart: [],
    hidden: true,
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state, 
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state,
                cart: add_to_cart(state.cart, action.payload),
                total: state.total + action.payload.price
            };
        case DECREASE_ITEM: 
            return {
                ...state,
                cart: decrease_from_cart(state.cart, action.payload),
                total: state.total - action.payload.price
            }
        case DELETE_ITEM:
            return {
                ...state,
                cart: delete_from_cart(state.cart, action.payload),
                total: state.total - action.payload.price * action.payload.quantity
            }
        default:
            return state;
    }
}
const delete_from_cart = (cart, item) => {
    return cart.filter(it => (
        it.id !== item.id
    ))
}
const decrease_from_cart = (cart, item) => {
    return cart.map(it => {
        if(it.id === item.id){
            if(it.quantity > 1){
                return {...it, quantity: it.quantity - 1};
            }
            else {
                const newCart = delete_from_cart(cart, item);
                return {...newCart};
            }
        }
        else return it;
    })
}
const add_to_cart = (cart, item) => {
    const exists = cart.find(found => (
        item.id === found.id
    ));
    
    if(exists) {
        return cart.map(p => 
            item.id === p.id ?
            {...p, quantity: p.quantity + 1} : p
        );
    }

    return [...cart, {...item, quantity: 1}];
}

export default cartReducer;