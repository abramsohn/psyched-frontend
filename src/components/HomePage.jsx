import React, { Component } from 'react'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";


class HomePage extends Component {
    render() {
        return (
            <>
                <h1>I Got You</h1>
                <h2>Psyched is an app that do stuff</h2>
                <p>
                    If you have an accout you can <Link to="/signin">signin</Link> <br />
                    Otherwise, please <Link to="/signup">signup</Link>
                </p>
                
                
            </>
        )
    }
}

export default HomePage