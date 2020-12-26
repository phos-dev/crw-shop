import React, { Component } from 'react';
import { auth, createProfile } from '../../firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../formInput/formInput.component';
import './signUp.styles.scss';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChangue = e => {
        const {value, name} = e.target;
        this.setState({[name]:value});
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createProfile(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(err){
            console.log(err.message);
        }
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='register'>
                <h1>Não tem conta?</h1>
                <span>Se registre!</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        type='text' 
                        label='Nome'
                        value={displayName}
                        required
                        onChange={this.handleChangue}
                    ></FormInput>
                    <FormInput 
                        name='email'
                        type='email' 
                        value={email}
                        label='Email'
                        required
                        onChange={this.handleChangue}
                    ></FormInput>
                    <FormInput 
                        name='password'
                        type='password' 
                        label='Senha'
                        value={password}
                        required
                        onChange={this.handleChangue}
                    ></FormInput>
                    <FormInput 
                        name='confirmPassword'
                        type='password' 
                        label='Confirme a senha'
                        value={confirmPassword}
                        required
                        onChange={this.handleChangue}
                    />
                    <Button type="Submit">REGISTRAR</Button>
                </form>
            </div>
        );
    }
}
export default Register;