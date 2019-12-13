import React, { Component } from "react";
import MenuButton from "../components/MenuButton/MenuButton";

class Menu extends Component {

  render() {
    return (
      <div className="container">
        <div className="col-12">
          <div className="row">
            <MenuButton>Make New Art</MenuButton>
          </div>
          <div className="row">
            <MenuButton>View My Gallery</MenuButton>
          </div>
          <div className="row">
            <MenuButton>Edit Account Info</MenuButton>
          </div>
          <div className="row">
            <MenuButton>Logout</MenuButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
