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
            <h1>Psyched</h1>
            <h2>We got you</h2>
            
            <h4>For Clients:</h4>
            <p>
                Psyched is an app that helps DBT clients to practice skills for managing emotions. While clients acquire skills in groups, the app helps to support practice and generalization.

            </p>
            <h4>For Therapists:</h4>
            <p>
                Psyched allows for tracking clients implementation of the daily use of the skills, and tracking their success
            </p>
                If you have an accout you can <Link to="/login">signin</Link> <br />
                Otherwise, please <Link to="/signup">signup</Link>
            
            
            
        </>
    )
}

export default HomePage