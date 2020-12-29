import React from 'react';
import Button from '../button/button.component';
import {ReactComponent as GarbageIcon} from '../../assets/cart/lixo.svg';
import './cart-dropdown-item.styles.scss';
import { connect } from 'react-redux';
import { decrease_item_quantity, delete_item, add_item} from '../../redux/cart.actions';

const capitalizeFirstLetter = (string) => (
    string.charAt(0).toUpperCase() + string.slice(1)
);

const CartItem = ({id, title, quantity, price, aditionalInfo, imageURL, decrease, del, add}) => {
    let str = '';
    const len = Object.keys(aditionalInfo).length;

    if(len){
        Object.keys(aditionalInfo).map((key, index) =>
            (index < len - 1) 
            ?
            str = str.concat([`${capitalizeFirstLetter(key)}: ${aditionalInfo[key]}; `])
            :
            str = str.concat([`${capitalizeFirstLetter(key)}: ${aditionalInfo[key]}.`])
        );
    }
    return (
        <div className='cartitem'>
            <img src={imageURL}/>
            <div className='details'>
                <div className='top'>
                    <span>{title}</span>
                    <GarbageIcon className='deleteIcon' height='20px' onClick={() => del({id, price, quantity})}/>
                </div>
                <div className='additionalinfo'>
                    {
                        (len) 
                        ?
                        str
                        :
                        'Não tem informações adicionais'
                    }
                </div>
                <div className='info'>
                    <div className='value'>R${(quantity * price).toFixed(2).replace('-0', '0')}</div>
                    <div className='options'>
                        <Button onClick={() => add({id, price})}>+</Button>
                        <div>{quantity}</div>
                        <Button onClick={() => decrease({id, price})}>-</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
CartItem.defaultProps = {
    quantity: 0,
    price: 100000000,
    aditionalInfo: {}
}
const mapDispatchToProps = dispatch => ({
    decrease: id => dispatch(decrease_item_quantity(id)),
    del: id => dispatch(delete_item(id)),
    add: item => dispatch(add_item(item))
});
export default connect(null, mapDispatchToProps)(CartItem);