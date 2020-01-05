import React, { Component } from "react";
import MenuButton from "../components/MenuButton/MenuButton";
import { Link, BrowserRouter as Router } from "react-router-dom";

class Menu extends Component {

  render() {
    return (
      <div className="container mt-5 ml-4">
        <div className="col-12 mt-5">
          <div className="row">
            <MenuButton><Link to="/view-art" style={{ color: "black" }}>Search Art In Your Area</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/take-photo" style={{ color: "black" }}>Make New Art</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/portfolio" style={{ color: "black" }}>View My Gallery</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/edit-account-info" style={{ color: "black" }}>Edit Account Info</Link></MenuButton>
          </div>
          <div className="row">
            <MenuButton><Link to="/login" style={{ color: "black" }}>Logout</Link></MenuButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;