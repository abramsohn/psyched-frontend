import React, { useState, useEffect } from 'react';
import { useAuth } from '../../useAuth.js';
import { useHistory } from "react-router-dom";

function Signin(props) {        
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
        <div className="form-signup">
            <form method='POST' onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Welcome Back!</h2>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name="email"
                        className="u-full-width"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />                   
                    
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        className="u-full-width"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />

                    <input type="submit" className="u-full-width button-primary" value="Sign In"/>
                </fieldset>
            </form>
            {auth.messege ? auth.messege : '' }
            <p>
                Don&apos;t have an account?
                <button
                    className="link"
                    onClick={() => props.setCurrentForm('signup')}
                >
                    Signup
                </button> <br />
               Are you a therapist?
                <button
                    className="link"
                    onClick={() => props.setCurrentForm('therapistSignup')}
                >
                        Signup
                </button> or login
            </p> 
        </div>
    )
}

export default Signin