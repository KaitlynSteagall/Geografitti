import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login"
import Menu from "./pages/Menu"
<<<<<<< HEAD
import TagArea from "./components/Canvas"; 

=======
import CapturePhoto from "./pages/CapturePhoto"
import EditPhoto from "./pages/EditPhoto"
import Portfolio from "./pages/Portfolio"
import EditUser from "./pages/EditUser"
>>>>>>> ff9db605a8e84d6f3cc14f6fe15c5093a1a9170f

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Menu /> {/* This will be converted to a route. Just using this to see work */}
        <TagArea />
        
        
      </div>
=======
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
>>>>>>> ff9db605a8e84d6f3cc14f6fe15c5093a1a9170f
    );
  }
}

export default App;
