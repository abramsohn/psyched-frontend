import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../../useAuth.js';
import { useHistory } from "react-router-dom";


function HomePage() {
    const auth = useAuth();
    let history = useHistory();
    useEffect(() => {
        if (auth.user) {
            history.push('/client')
        }
    })
    return (
        <>
            {console.log(process.env)}
            <h1>I Got You</h1>
            <h2>Psyched is an app that do stuff</h2>
            <p>
                If you have an accout you can <Link to="/login">signin</Link> <br />
                Otherwise, please <Link to="/signup">signup</Link>
            </p>
            
            
        </>
    )
}

export default HomePage