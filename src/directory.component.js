import React, {Component} from 'react';
import MenuItem from './MenuItem';
import './directory.styles.scss';
class Directory extends Component {
    constructor() {
        super();
        this.state = {
        sec: [{
            id: 1,
            title: 'SMARTWATCHES',
            background: 'https://wallpaperaccess.com/full/2067364.jpg'
        }, 
        {
            id: 2,
            title: 'QUARTZ',
            background: 'https://cdn.improb.com/wp-content/uploads/2019/11/Best-Quartz-Watches.jpg'
        },
        {
            id: 3,
            title: 'MECÂNICOS',
            background: 'https://c4.wallpaperflare.com/wallpaper/276/910/406/clocks-watch-ulysse-nardin-wallpaper-preview.jpg'
        }, 
        {
            id: 4,
            title: 'ESPORTIVOS',
            background: 'https://images3.alphacoders.com/100/1003359.jpg'
        },
        {
            id: 5,
            title: 'DIGITAIS',
            background: 'https://cdn.hiconsumption.com/wp-content/uploads/2020/06/Best-Digital-Watches-0-Hero.jpg'
        }]}
    }
    render() {
        return (
            <div className='directory'>
                {
                    this.state.sec.map(({title, id, background}) => {
                        return <MenuItem key={id} title={title} background={background}/>;
                    })
                }
            </div>
        );
    }
}
export default Directory;