import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Cart} from '../../assets/cart/cart.svg';
import { toggle_cart_dropdown } from '../../redux/cart.actions';
import { countCartItems } from '../../redux/cart.selectors';
import './cart.styles.scss';
const CartComponent = ({qtd, toggle_dropdown}) => {
    return(
        <div className='cart' onClick={toggle_dropdown}>
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

const mapDispatchToProps = dispatch => ({
    toggle_dropdown: () => dispatch(toggle_cart_dropdown())
})
const mapStateToProps = state => ({
    qtd: countCartItems(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);