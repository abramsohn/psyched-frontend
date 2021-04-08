import React, { useState, useEffect } from 'react';
import { useAuth } from '../../useAuth.js';
import { useHistory } from "react-router-dom";

function Signin() {        
    const auth = useAuth();
    let history = useHistory();

    useEffect(() => {
            if (auth.user) {
                history.push('/client')
            }
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        auth.signin(email, password)
        if (auth.user) {
            history.push('/protected')
        }
    }

    return (
        <form method='POST' onSubmit={handleSubmit}>
            <fieldset>
                <h2>Sign In</h2>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />                   
                
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />

                <input type="submit" value="Sign In"/>
            </fieldset>
        </form>
    )
}

export default Signin