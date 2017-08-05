import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const user = {name: 'tony soprano'}

    return (
      <div className="App">
        <p className="App-intro">
          {user.name}
        </p>
      </div>
    );
  }
}

export default App;
