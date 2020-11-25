import React, {Component} from 'react';
import ItemPreview from '../../components/preview/preview.component'
import shop_data from './shop.data';
import './shop.styles.scss';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Previews: shop_data
        }
    }
    render() {
        return (
            <div className='shop'>
                <h1 className='shopTitle'>MAIS VENDIDOS</h1>
                {
                    this.state.Previews.map(({id, ...otherProps}) => (
                        <ItemPreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
}
export default Shop;