import React from 'react'
import Sidebar from './Sidebar.jsx'
import Dashboard from './Dashboard.jsx'

import {
  BrowserRouter as Router,
//   Switch,
//   Route,
} from
"react-router-dom";

function Layout() {
    return (
        <>
        <Router>
            <div className="row">
                <div className="three columns">
                    <Sidebar />
                </div>
                <div className="nine columns">
                    <Dashboard />
                </div>
            </div>
        </Router>
        </>
    )
 
}

export default Layout