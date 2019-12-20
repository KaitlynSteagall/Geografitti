import React, { Component } from "react";
import MenuButton from "../components/MenuButton/MenuButton";
import {Link, BrowserRouter as Router } from "react-router-dom";

class Menu extends Component {

  render() {
    return (
      <div className="container">
        <div className="col-12">
          <div className="row">
            <MenuButton><Link to="/Take-Photo">Make New Art</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/Portfolio">View My Gallery</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/Edit-Account-Info">Edit Account Info</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/">Logout</Link></MenuButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
