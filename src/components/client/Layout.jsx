import React from 'react'
import Sidebar from './Sidebar.jsx'
import Dashboard from './Dashboard.jsx'
import MainForm from './MainForm.jsx'
import DistressEvents from './DistressEvents.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from
"react-router-dom";


function Layout() {
    return (
        <>
        <Router>
            <aside className="dashboard-side three columns">
                <Sidebar />
            </aside>
            <main className="dashboard-main nine columns">
                <Switch>
                    <Route exact path="/client/" component={Dashboard} />
                    <Route exact path="/client/skills" component={DistressEvents} />
                    <Route exact path="/client/skills-helper" component={MainForm} />
                </Switch>
            </main>
        </Router>
        </>
    )
 
}

export default Layout