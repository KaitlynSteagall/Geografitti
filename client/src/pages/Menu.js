import React, { Component } from "react";
import MenuButton from "../components/MenuButton/MenuButton";
import {Link, BrowserRouter as Router } from "react-router-dom";

class Menu extends Component {

  render() {
    return (
      <div className="container">
        <div className="col-12">
          <div className="row">
            <MenuButton><Link to="/Take-Photo" style={{color:"white"}}>Make New Art</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/Portfolio" style={{color:"white"}}>View My Gallery</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/Edit-Account-Info" style={{color:"white"}}>Edit Account Info</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/" style={{color:"white"}}>Logout</Link></MenuButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
