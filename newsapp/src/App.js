import "./App.css";

import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";

export default class App extends Component {
  name = "DSK";
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}
