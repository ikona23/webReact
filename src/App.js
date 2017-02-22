import React, { Component } from 'react'
import './App.css'
import Nav from "./components/Nav"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
          <Nav />
          <Header />
          <Body />
          <Footer />
      </div>
    );
  }
}

export default App;
