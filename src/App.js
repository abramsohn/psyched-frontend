import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from
"react-router-dom";

import baseUrl from './helpers/baseUrl.js'

import HomePage from './components/public/HomePage.jsx'
import Signup from './components/public/Signup.jsx'
import Signin from './components/public/Signin.jsx'
import MainForm from './components/protected/MainForm.jsx'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      userRole: null
    }
  }

  componentDidMount() {
    this.authenticatUser();
  }

  authenticatUser = () => {
    fetch(`${baseUrl}/users`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        
    })
    .then(res => res.json())
    .then(user => this.setUser(user))
    .catch(error => console.log({ 'Error': error }));
  }

  setUser = ({name, role}) => {
    this.setState({
      user: name,
      userRole: role
    })
    if (!name) {
      return <Redirect to="/singin" />
    }
  }

  render() {
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" >
            {!this.state?.user ?
              <HomePage />:
              <Redirect to="/skills" />
              }
          </Route>
          <Route path="/signin">
            <Signin setUser={this.setUser} />
          </Route>
          <Route path="/signup">
             <Signup setUser={this.setUser}/>
          </Route>
          <Route>
              <MainForm path="/skills" setUser={this.setUser} />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;
