import React, { Component } from 'react';
import ItemPreview from '../../components/preview/preview.component';
import shop_data from './shop.data';
import './shop.styles.scss';
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Previews: shop_data
    };
  }

  render() {
    console.log(this.props.match)
    return (
      <div className='shop'>
        <h1 className='shopTitle'>MAIS VENDIDOS</h1>
        {Object.keys(this.state.Previews).map(key => {
          const { id, ...otherProps } =  this.state.Previews[key];
          return <ItemPreview key={id} {...otherProps} />
        })}
      </div>
    );
  }
}
export default Shop;
