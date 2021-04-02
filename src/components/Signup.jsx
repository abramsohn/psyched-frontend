import React, { Component } from 'react'
import baseUrl from '../helpers/baseUrl.js'

class Signup extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${baseUrl}/users/signup`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }),
            headers: { 'Content-Type': 'application/json' },
            
        })
        .then(res => res.json())
        .then(createdUser => console.log(createdUser))
        .catch(error => console.log({ 'Error': error }));
    }

    render() {
        return (
            <form method='POST' onSubmit={this.handleSubmit}>
                <fieldset>
                    <h2>Sign Up!</h2>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange} 
                    />
                    
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} 
                    />
                    
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} 
                    />

                    <input type="submit" value="Sign Up"/>
                </fieldset>
            </form>
        )
    }
}

export default Signup