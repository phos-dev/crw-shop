import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectTotal } from '../../redux/cart.selectors';
import Button from '../button/button.component';
import CartItem from '../cart-dropdown-item/cart-dropdown-item.component';
import './cartdropdown.styles.scss';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cart, total, history}) => {

    return(
        <div className='cartdropdown'>
            <h1>Carrinho</h1>
            <hr/>
            <div className='items'>
                {
                    (cart.length) ?
                    cart.map(item => (
                        item.id ? <CartItem key={item.id} {...item}/> : null
                    ))
                    : 
                    <span>Seu carrinho está vazio</span>
                }
            </div>
            <hr/>
            <div className='total'>Total: R${total.toFixed(2).replace('-0', '0')}</div>
            <Button onClick={() => history.push('/checkout')}>FINALIZAR</Button>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cart: selectCartItems,
    total: selectTotal
});

export default withRouter(connect(mapStateToProps)(CartDropdown));