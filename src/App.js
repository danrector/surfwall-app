import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Images from './Images';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Surf is up</h2>
        </div>

        <Images />
      </div>
    );
  }
}

export default App;
