import React from 'react';
import Button from '../button/button.component';
import {ReactComponent as GarbageIcon} from '../../assets/cart/lixo.svg';
import './cart-dropdown-item.styles.scss';

const capitalizeFirstLetter = (string) => (
    string.charAt(0).toUpperCase() + string.slice(1)
);

const CartItem = ({key, qtd, price, aditionalInfo}) => {
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
            <img src='https://static.netshoes.com.br/produtos/relogio-smartwatch-fitgear-fusion/06/NTX-0004-006/NTX-0004-006_zoom1.jpg?ims=544x'/>
            <div className='details'>
                <div className='top'>
                    <span>Item {key}</span>
                    <GarbageIcon className='deleteIcon' height='20px'/>
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
                    <div className='value'>R${qtd * price}</div>
                    <div className='options'>
                        <Button>+</Button>
                        <div>{qtd}</div>
                        <Button>-</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
CartItem.defaultProps = {
    qtd: 0,
    price: 100000000,
    aditionalInfo: {}
}
export default CartItem;