import React from 'react';
import './card.styles.scss';
const CardShop = ({title, imageURL, price}) => (
    <div className="cardShop">
        <div className="card-image" style={{
            backgroundImage: `url(${imageURL})`
        }}/>
        <div className='item-footer'>
            <span className="title">{title}</span>
            <span className="price">R${price}</span>
        </div>
    </div>
);
export default CardShop;