import React, { Component } from 'react'
import MainForm from './components/MainForm.jsx'
import Signup from './components/Signup.jsx'
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Signup />

        < MainForm />
      </div>
    );
  }
}

export default App;
