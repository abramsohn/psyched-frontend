import React, { useState } from 'react'
import baseUrl from '../../helpers/baseUrl.js'


function Signup (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`${baseUrl}/users/signup`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
            headers: { 'Content-Type': 'application/json' },
            
        })
        .then(res => res.json())
        .then(user => console.log(user))
        .catch(error => console.log({ 'Error': error }));
    }

    return (
        <form method='POST' onSubmit={handleSubmit}>
            <fieldset>
                <h2>Sign Up!</h2>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                />
                
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />

                <input type="submit" value="Sign Up"/>
            </fieldset>
        </form>
    )
}


export default Signup