import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authen from './Authen';

class App extends Component {
  render() {
    return (
      <div className="App">
<header>
  <h1>
    React + Firebase Authentication 
  </h1>
</header>
<Authen />
      </div>
    );
  }
}

export default App;
