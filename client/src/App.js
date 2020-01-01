import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SmokeLogo from "./components/SmokeLogo/SmokeLogo";
import Login from "./pages/Login/Login"
import Menu from "./pages/Menu"
import CapturePhoto from "./pages/CapturePhoto"
import EditPhoto from "./pages/EditPhoto"
// import Portfolio from "./pages/Portfolio/Portfolio"
import EditUser from "./pages/EditUser/EditUser"
// import NotFound from "./pages/NotFound/NotFound"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={SmokeLogo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/take-photo" component={CapturePhoto} />
            <Route exact path="/create-art" component={EditPhoto} />
            {/* <Route exact path="/portfolio" component={Portfolio} /> */}
            <Route exact path="/edit-account-info" component={EditUser} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
