import React from 'react';
import { connect } from 'react-redux';
import { add_item, decrease_item_quantity, delete_item } from '../../redux/cart.actions';
import './checkoutItem.styles.scss';

const CheckoutItem = props => {
    const {item, dispatch} = props;
    const { imageURL, title, description, quantity, price} = item;

    return (
        <div className='checkout-item'>
            <img src={imageURL} alt={title} height='200px'></img>
            <div className='detail'>
                <div className='title'>
                    {title}
                    <div className='remove' onClick={() => dispatch(delete_item(item))}>
                        &#x2715;
                    </div>
                </div>
                <div className='description'>
                    <span>{description || 'Esse produto não possui mais detalhes.'}</span>
                </div>
                <div className='checkout-item-footer'>
                    <div className='quantity'>
                        Quantidade: 
                        <div onClick={() => dispatch(add_item(item))}>&#x25B2;</div>
                        {quantity}
                        <div onClick={() => dispatch(decrease_item_quantity(item))}>&#x25BC;</div>
                    </div>
                    <div className='price'>
                            R${price.toFixed(2).replace('-0', '0')}
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};
export default connect()(CheckoutItem);