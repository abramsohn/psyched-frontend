import React from 'react';
import { ProvideAuth } from './useAuth.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivetRoute from './components/PrivetRoute.jsx';

import Signup from './components/public/Signup.jsx'
import Signin from './components/public/Signin.jsx'
import HomePage from './components/public/HomePage.jsx';
import ClientLayout from './components/client/Layout.jsx';

import './App.css';
import './normalize.css'
import './skeleton.css'


function App() {
  return (
    
    <ProvideAuth>
      <div className="container row">
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>

            <PrivetRoute path="/client">
              <ClientLayout />
            </PrivetRoute>
          </Switch>
        </Router>
      </div>
    </ProvideAuth>
    );
}

export default App;
