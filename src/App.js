import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./componets/Layout"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2><Layout /></h2>
        <button>Click it</button>
      </div>
    );
  }
}

export default App;
