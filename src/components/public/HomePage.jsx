import React from 'react'
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <>
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