import React, { Component } from 'react';
import FormInput from '../formInput/formInput.component';
import './signIn.styles.scss';
import Button from '../button/button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }
    handleChangue = e => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    }
    render(){

        return(
            <div className='signIn'>
                <h1>Já tem uma conta?</h1>
                <span>Faça o login logo abaixo.</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                    name='email'
                    type='email' 
                    id='email'
                    value={this.state.email}
                    label='Email'
                    required
                    onChange={this.handleChangue}
                    />

                    <FormInput 
                    name='password'
                    type='password' 
                    id='password'
                    label='Senha'
                    value={this.state.password}
                    required
                    onChange={this.handleChangue}
                    />
                    
                    <div className='submit'>
                        <Button onClick={signInWithGoogle}>ENTRAR</Button>
                        <Button google onClick={signInWithGoogle}>ENTRE COM O GOOGLE</Button>
                    </div>
                </form>
                  
            </div>
        );
    }
}
export default SignIn;