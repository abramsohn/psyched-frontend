import React, { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";
import { useAuth } from '../../useAuth.js';
import { useHistory } from "react-router-dom";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import TherapistSignup from "./TherapistSignup.jsx";


function HomePage() {
    const auth = useAuth();
    let history = useHistory();

    const [currentForm, setCurrentForm] = useState('signin')

    useEffect(() => {
        if (auth.user) {
            history.push('/client')
        }
    })
    return (
        <>
            <div className="home-page">
                <div className="row">
                    <div className="six columns">
                         <div className="tag">
                            <h1>Psyched</h1>
                            <h2>We got you</h2>
                             <p>
                                Psyched is an app that helps DBT clients to practice skills for managing emotions. While clients acquire skills in groups, the app helps to support practice and generalization.
                            </p>
                        </div>
                    </div>
                    <div className="six columns">
                        {currentForm === 'signin' && <Signin setCurrentForm={setCurrentForm} />}
                        {currentForm === 'signup' && <Signup setCurrentForm={setCurrentForm} />}
                        {currentForm === 'therapistSignup' && <TherapistSignup setCurrentForm={setCurrentForm} />}
                        


                    </div>
                </div>
            </div>
            
        </>
    )
}

export default HomePage