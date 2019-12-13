import React, { Component } from "react";
import "./App.css";
import Menu from "./pages/Menu"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu /> {/* This will be converted to a route. Just using this to see work */}
      </div>
    );
  }
}

export default App;
