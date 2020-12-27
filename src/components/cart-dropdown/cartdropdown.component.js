import React from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-dropdown-item/cart-dropdown-item.component';
import './cartdropdown.styles.scss';

const CartDropdown = () => {
    return(
        <div className='cartdropdown'>
            <h1>Carrinho</h1>
            <hr/>
            <div className='items'>
                <CartItem aditionalInfo={{color: 'Black', size: 'M', gender: 'Masculine'}}/>
                <CartItem aditionalInfo={{color: 'Black', size: 'M', gender: 'Masculine'}}/>
                <CartItem aditionalInfo={{color: 'Black', size: 'M', gender: 'Masculine'}}/>
                <CartItem aditionalInfo={{color: 'Black', size: 'M', gender: 'Masculine'}}/>
                <CartItem aditionalInfo={{color: 'Black', size: 'M', gender: 'Masculine'}}/>
            </div>
            <hr/>
            <div className='total'>Total: R$12</div>
            <Button>CONFIRMAR</Button>
        </div>
    );
}

export default CartDropdown;