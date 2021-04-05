import React, { Component } from 'react'
import MainForm from './components/MainForm.jsx'
import Signup from './components/Signup.jsx'
import Signin from './components/Signin.jsx'
import Signout from './components/Signout.jsx'
import baseUrl from './helpers/baseUrl.js'

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
  }

  render() {
    
    return (
      <div className="App">
        <Signup setUser={this.setUser}/>
        <Signin setUser={this.setUser} />
        <Signout />


        { < MainForm /> }
      </div>
    );
  }
}

export default App;
