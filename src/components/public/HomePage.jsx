import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../../useAuth.js';
import { useHistory } from "react-router-dom";
// import Signin from "./Signin.jsx";


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
            <div className="home-page">
                <div className="tag">
                    <h1>Psyched</h1>
                    <h2>We got you</h2>
                </div>
                <div className="row description">
                    <div className="six columns">
                <h3>For Clients:</h3>
                <p>
                            Psyched is an app that helps DBT clients to practice skills for managing emotions. While clients acquire skills in groups, the app helps to support practice and generalization.

                </p>
                    </div>
                    <div className="six columns">
                        <h3>For Therapists:</h3>
                        <p>
                            Psyched allows for tracking clients implementation of the daily use of the skills, and tracking their success
                        </p>
                    </div>
                </div>
                 <div className="row text-center">
                    <div className="five columns">
                        <Link className="button" to="/login">login</Link> 
                    </div>
                    <div className="two columns">or</div>
                    <div className="five columns">
                        <Link className="button" to="/signup">signup</Link>
                    </div>
                </div>
            </div>            
            
        </>
    )
}

export default HomePage