import React, { useState } from 'react';
import { useAuth } from '../../useAuth.js';

function Signin() {
            
    const auth = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        auth.signin(email, password)
        // fetch(`${baseUrl}/users/signin`, {
        //     method: 'POST',
        //     credentials: 'include',
        //     body: JSON.stringify({
        //         email: email,
        //         password: password,
        //     }),
        //     headers: { 'Content-Type': 'application/json' },
            
        // })
            // .then(res => res.json())
            // .then(user => (props.setUser(user)))
            // .catch(error => console.log({ 'Error': error }));
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