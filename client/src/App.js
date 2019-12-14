import React, { Component } from "react";
import "./App.css";
import Menu from "./pages/Menu"
import TagArea from "./components/Canvas"; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu /> {/* This will be converted to a route. Just using this to see work */}
        <TagArea />
        
        
      </div>
    );
  }
}

export default App;
