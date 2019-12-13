import React, { Component } from "react";
import MenuButton from "../components/MenuButton/MenuButton";
import {Row, Container } from "../components/Grid";


class Menu extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
         <MenuButton>Make New Art</MenuButton>
        </Row>
        <Row>
         <MenuButton>View My Gallery</MenuButton>
        </Row>
        <Row>
         <MenuButton>Edit Account Info</MenuButton>
        </Row>
        <Row>
         <MenuButton>Logout</MenuButton>
        </Row>
      </Container>
    );
  }
}

export default Menu;
