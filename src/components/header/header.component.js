import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleHidden } from '../../redux/cart.selectors';
import { selectCurrentUser } from '../../redux/user.selectors';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from './logo.svg';
import { signOut } from '../../firebase/firebase.utils';
import CartComponent from '../cart/cart.component';
import CartDropdown from '../cart-dropdown/cartdropdown.component';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/'>
      <Logo className='logo' />
    </Link>
    <div className='headerItems'>
      {currentUser ? (
        <a onClick={signOut} href='/#'>
          LOGOUT
        </a>
      ) : (
        <Link to='/signin'>LOGIN</Link>
      )}
      <Link to='/shop'>SHOP</Link>
      <CartComponent qtd={99} />
      {hidden ? null : <CartDropdown />}
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: toggleHidden
});
export default connect(mapStateToProps)(Header);
