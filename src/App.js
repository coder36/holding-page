import React, { Component } from 'react';
import './App.css';
import config from './config'

class App extends Component {
  render() {

    return (

        <span className="flex-container">
            <h2 style={{textAlign: "center"}} >We're making some improvements.  Please try again in a few minutes</h2>
            <span>{config.server_id}</span>
        </span>

    )
  }
}

export default App;
