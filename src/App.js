import React from 'react';
import { ProvideAuth } from './useAuth.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from
"react-router-dom";
import PrivetRoute from './components/PrivetRoute.jsx';

// import baseUrl from './helpers/baseUrl.js'

// import HomePage from './components/public/HomePage.jsx'
import Signup from './components/public/Signup.jsx'
import Signin from './components/public/Signin.jsx'
import Signout from './components/protected/Signout.jsx'
// import MainForm from './components/protected/MainForm.jsx'

import './App.css';
import MainForm from './components/protected/MainForm.jsx';
import HomePage from './components/public/HomePage.jsx';

function App() {
  
  return (
    <ProvideAuth>
      <Router>
        <ul>
          <li>
            <Link to="/public">this is public</Link>
          </li>
          <li>
            <Link to="/protected">this is protected</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/public">
            <HomePage />
          </Route>
          <PrivetRoute path="/protected">
            <MainForm />
          </PrivetRoute>
        </Switch>
      </Router>
        <Signin />
        <Signup />
        <Signout />
        <MainForm />
      </ProvideAuth>
    );
}

export default App;
