import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './logo.svg';
import './header.styles.scss';
const Header = () => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='headerItems'>
            <Link to='/signin'>
                LOGIN
            </Link>
            <Link to='/shop'>
                SHOP
            </Link>
        </div>
    </div>
);

export default Header;