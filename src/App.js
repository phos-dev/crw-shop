import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/shop.component';
import Header from './components/header/header.component';
import Register_Login from './pages/Register_and_signIn/register_signIn';
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/signin' component={Register_Login}/>
      </Switch>
    </div>
  );
}

export default App;
