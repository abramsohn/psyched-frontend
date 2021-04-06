import React from 'react';
import { ProvideAuth } from './useAuth.js';

import {
  // BrowserRouter as Router,
  // Link,
  // Switch,
  // Route,
  // Redirect,
  // useHistory,
  // useLocation
} from
"react-router-dom";

// import baseUrl from './helpers/baseUrl.js'

// import HomePage from './components/public/HomePage.jsx'
import Signup from './components/public/Signup.jsx'
import Signin from './components/public/Signin.jsx'
import Signout from './components/protected/Signout.jsx'
// import MainForm from './components/protected/MainForm.jsx'

import './App.css';
import MainForm from './components/protected/MainForm.jsx';
// import HomePage from './components/public/HomePage.jsx';
// import MainForm from './components/protected/MainForm.jsx';

function App() {
  
  // componentDidMount() {
    // this.authenticatUser();
  // }

  // authenticatUser = () => {
    // fetch(`${baseUrl}/users`, {
        // method: 'GET',
        // credentials: 'include',
        // headers: { 'Content-Type': 'application/json' },
        
    // })
    // .then(res => res.json())
    // .then(user => this.setUser(user))
    // .catch(error => console.log({ 'Error': error }));
  // }

  // setUser = ({name, role}) => {
    // this.setState({
      // user: name,
      // userRole: role
    // })
    // if (!name) {
      // return <Redirect to="/singin" />
    // }
  // }

  return (
    <ProvideAuth>
        <Signin />
        <Signup />
        <Signout />
        <MainForm />
      </ProvideAuth>
    );
}

export default App;
