import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-dropdown-item/cart-dropdown-item.component';
import './cartdropdown.styles.scss';

const CartDropdown = ({cart, total}) => {

    return(
        <div className='cartdropdown'>
            <h1>Carrinho</h1>
            <hr/>
            <div className='items'>
                {
                    cart.map(item => (
                        item.id ? <CartItem key={item.id} {...item}/> : null
                    ))
                }
            </div>
            <hr/>
            <div className='total'>Total: R${total.toFixed(2)}</div>
            <Button>CONFIRMAR</Button>
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.store.cart,
    total: state.store.total
});

export default connect(mapStateToProps)(CartDropdown);