import React, { Component } from 'react'
import MainForm from './components/MainForm.jsx'
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <h1>Psyched</h1>
        < MainForm />
      </div>
    );
  }
}

export default App;
