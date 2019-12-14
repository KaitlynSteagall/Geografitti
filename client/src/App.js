import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import CapturePhoto from "./pages/CapturePhoto"
import EditPhoto from "./pages/EditPhoto"
import Portfolio from "./pages/Portfolio"
import EditUser from "./pages/EditUser"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Login} /> */}
            <Route exact path="/Menu" component={Menu} />
            {/* <Route exact path="/Take-Photo" component={CapturePhoto} /> */}
            {/* <Route exact path="/Create-Art" component={EditPhoto} /> */}
            {/* <Route exact path="/Portfolio" component={Portfolio} /> */}
            {/* <Route exact path="/Edit-Account-Info" component={EditUser} /> */}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
