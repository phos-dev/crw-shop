import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/shop.component';
import Header from './components/header/header.component';
import Register_Login from './pages/Register_and_signIn/register_signIn';
import {auth, createProfile} from './firebase/firebase.utils';
import {setUser} from './redux/user.actions';
import {connect} from 'react-redux';
import { selectCurrentUser } from './redux/user.selectors';
import {createStructuredSelector} from 'reselect';
import Checkout from './pages/Checkout/checkout.component';

class App extends Component{
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user){
        const userRef = await createProfile(user);
        userRef.onSnapshot(snap => {
          this.props.setUser({
              id: snap.id,
              ...snap.data()
          })
        })
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path="/signin">
            {this.props.user ? <Redirect exact to="/" /> : <Route path='/signin' component={Register_Login}/>}
          </Route>
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
