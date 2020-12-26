import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './logo.svg';
import {signOut} from '../../firebase/firebase.utils';
import './header.styles.scss';
import { connect } from 'react-redux';
import CartComponent from '../cart/cart.component';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='headerItems'>
            
            {
                currentUser
                ?
                <a onClick={signOut} href="/#">
                    LOGOUT
                </a>
                :
                <Link to='/signin'>
                    LOGIN
                </Link>
            }
            <Link to='/shop'>
                SHOP
            </Link>
            <CartComponent qtd={99}/>
        </div>
    </div>
);
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);