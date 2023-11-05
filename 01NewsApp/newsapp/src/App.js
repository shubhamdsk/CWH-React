import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name = "DSK"
  render() {
    return (
      <div>
        <p>Hello World , My First Class based Component - {this.name}</p>
      </div>
    )
  }
}
