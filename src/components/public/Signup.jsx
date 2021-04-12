import React, { useState, useEffect } from 'react'
import { useAuth } from '../../useAuth.js';
import { useHistory } from "react-router-dom";

function Signup(props) {
    const auth = useAuth();
    let history = useHistory();

    useEffect(() => {
        if (auth.user) {
            history.push('/client')
        }
    })

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleClientSubmit(event) {
        event.preventDefault()
        auth.signup(name, email, password)
        if (auth.user) {
            history.push('/protected')
        }
    }

    return (
        <div className="form-signup">
            <form method='POST' onSubmit={handleClientSubmit}>
                <h2>Welcome!</h2>
                
                <label htmlFor="name">Name</label>
                <input
                    className="u-full-width"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                />

                 <label htmlFor="email">Email</label>
                <input
                    className="u-full-width"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                
                <label htmlFor="password">Password</label>
                <input
                    className="u-full-width"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />

                <input className="u-full-width  button-primary" type="submit" value="Sign Up"/>
            </form>
             <p>Already have an account?
                <button
                    className="link"
                    onClick={() => props.setCurrentForm('signin')}
                >
                        Signin
                </button>
            </p> 
            </div>
    )
}

export default Signup