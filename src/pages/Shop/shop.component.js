import React, {Component} from 'react';
import ItemPreview from '../../components/preview/preview.component'
import shop_data from './shop.data';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Previews: shop_data
        }
    }
    render() {
        return (
            <div>
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