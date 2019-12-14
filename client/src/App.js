import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login"
import Menu from "./pages/Menu"
import TagArea from "./components/Canvas"; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu /> {/* This will be converted to a route. Just using this to see work */}
        <TagArea />
         {/* <Login />  {TO DO: make this into a route }   */}
       
        
        
      </div>
    );
  }
}

export default App;
