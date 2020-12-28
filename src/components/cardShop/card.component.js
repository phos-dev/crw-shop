import React from 'react';
import { connect } from 'react-redux';
import { add_item } from '../../redux/cart.actions';
import Button from '../button/button.component';
import './card.styles.scss';
const CardShop = ({item, addItem}) => {
    const {title, imageURL, price} = item;
    return(
        <div className="cardShop">
        <div className="card-image" style={{
            backgroundImage: `url(${imageURL})`
        }}/>
        
        <Button className='addCart' onClick={() => addItem(item)}>ADICIONAR AO CARRINHO</Button>
        <div className='item-footer'>
            <span className="title">{title}</span>
            <span className="price">R${price}</span>
        </div>
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(add_item(item))
})
export default connect(null, mapDispatchToProps)(CardShop);