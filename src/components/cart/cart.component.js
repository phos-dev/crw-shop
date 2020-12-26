import React from 'react';
import {ReactComponent as Cart} from '../../assets/cart/cart.svg';
import './cart.styles.scss';
const CartComponent = ({qtd}) => {
    return(
        <div className='cart'>
            <span>
                {
                    (qtd > 99)
                    ?
                    '99+'
                    :
                    qtd
                }
            </span>
            <Cart height='50px'/>
        </div>
    );
}
CartComponent.defaultProps = {
    qtd: 0
}
export default CartComponent;