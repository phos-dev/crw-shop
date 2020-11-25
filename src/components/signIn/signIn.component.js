import React, { Component } from 'react';

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
            <div>
                <h1>Já tem uma conta?</h1>
                <span>Faça o login aqui embaixo.</span>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name='email'
                    type='email' 
                    id='email'
                    required
                    onChange={this.handleChangue}
                    ></input>
                    <input 
                    name='password'
                    type='password' 
                    id='password'
                    required
                    onChange={this.handleChangue}
                    ></input>
                </form>
            </div>
        );
    }
}
export default SignIn;