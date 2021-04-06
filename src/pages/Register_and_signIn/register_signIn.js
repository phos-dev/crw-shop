import React from 'react';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';
import './auth.styles.scss';
const Register_Login = () => (
  <div className='authScreen'>
    <SignIn />
    <SignUp />
  </div>
);

export default Register_Login;
