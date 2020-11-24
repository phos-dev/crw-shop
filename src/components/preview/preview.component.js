import React from 'react';
import CardShop from '../cardShop/card.component';
import './preview.styles.scss';
const ItemPreview = ({title, items}) => (
    <div className="itemPreview">
        <h1>{title}</h1>
        <div className='items-list'>
            {
                items.map(({id, ...otherProps}) => (
                    <CardShop key={id} {...otherProps}/>
                ))
            }
        </div>
    </div>
);
export default ItemPreview;