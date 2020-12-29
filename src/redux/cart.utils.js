export const delete_from_cart = (cart, item) => {
    return cart.filter(it => (
        it.id !== item.id
    ))
}
export const decrease_from_cart = (cart, item) => {
    
    const nC = cart.find(it => (
        it.id === item.id
    ));

    if(nC.quantity > 1){
        return cart.map(item => (
            item.id === nC.id ? 
            {...item, quantity: item.quantity - 1} : item
        ));
    }
    else {
        return delete_from_cart(cart, item);
    }
}
export const add_to_cart = (cart, item) => {
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
