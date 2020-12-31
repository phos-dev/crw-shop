import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '../../components/button/button.component';
import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';
import { toggle_cart_dropdown } from '../../redux/cart.actions';
import { selectCartItems, selectTotal, toggleHidden } from '../../redux/cart.selectors';
import './checkout.styles.scss';

const Checkout = ({cart, total, dispatch, history, hidden}) => {
    return (
        <div className='checkout'>
            <div className='checkout-items'>
                <h1>Seu carrinho</h1>
                {
                    cart && cart.length === 0
                    ?
                    <div className='empty'>Você não possui items no seu carrinho.</div>
                    :
                    (
                        cart.map(item => {
                            return <CheckoutItem key={item.id} item={item}/>
                        })
                    )
                }
                <Button onClick={() => {
                        if(!hidden) {
                            dispatch(toggle_cart_dropdown());
                        }
                        history.push('/shop');
                    }}>Adicionar mais itens</Button>
            </div>
            <div className='summary'>
                <span className='summary-title'>Resumo</span>
                <div className='payment-info'>
                    <span>Subtotal: R${total.toFixed(2).replace('-0', '0')}</span>
                    <span>Envio: R$0.00</span>
                </div>
                <div className='total'>
                    <span>Total: 0</span>
                    <Button>Finalizar compra</Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cart: selectCartItems,
    total: selectTotal,
    hidden: toggleHidden
})
export default connect(mapStateToProps)(Checkout);