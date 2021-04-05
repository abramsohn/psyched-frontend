import React, { Component } from 'react'
import MainForm from './components/MainForm.jsx'
import Signup from './components/Signup.jsx'
import Signin from './components/Signin.jsx'
import Signout from './components/Signout.jsx'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      userRole: null
    }
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
        <Signup />
        <Signin setUser={this.setUser} />
        <Signout />


        { < MainForm /> }
      </div>
    );
  }
}

export default App;
